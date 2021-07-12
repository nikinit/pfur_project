// TODO: probably remove planesData
import React from "react";
import Card from "./Card";
import data from "../data/data.xml";
const planesData = {};

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.moreButton = this.moreButton.bind(this);
        this.state = {
            isLoaded: false,
            data: {},
            loadedPlanes: 0,
            isEndOfList: false,
            disabledButton: false
        }
    }
    doRequest (loadedPlanes, planesAmount) {
        return fetch(data)
            .then(resp => resp.text())
            .then(dataStr => new DOMParser()
            .parseFromString(dataStr, 'text/xml') 
            .getElementsByTagName('product')) 
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true
                    })
                    if (result.length === loadedPlanes) {
                        this.setState({
                            isEndOfList: true,
                            disabledButton: true
                        })
                    }
                    if (result.length - loadedPlanes < planesAmount) {
                        planesAmount = result.length - loadedPlanes;
                    }
                    for (let i = 0; i < planesAmount; i++) {
                        let newCharacteristics = {};
                        let propsAmount = result[loadedPlanes].children.length;
                        for (let j = 0; j < propsAmount; j++) {
                            let propName = result[loadedPlanes].children[j].attributes['applicPropertyIdent'].nodeValue;
                            let propValue = result[loadedPlanes].children[j].attributes['applicPropertyValues'].nodeValue;
                            newCharacteristics[propName] = propValue;
                        }
                        planesData[loadedPlanes] = newCharacteristics;
                        loadedPlanes++;
                    }
                    this.setState({
                        data: planesData,
                        loadedPlanes: loadedPlanes
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            );
    };
    moreButton(event) {
        this.doRequest(this.state.loadedPlanes, 3);
    }

    componentDidMount() {
        this.doRequest(this.state.loadedPlanes, 3);
    }

    render() {
        const {data} = this.state;
        const cards = Object.keys(data).map((card, i) => {
            return (
                <Card characteristics = {data[i]} key={i} />
            )
        });
        console.log(cards);
        return (
            <section className="cards root__section">
                {cards}
                <button className="cards__button" onClick={this.moreButton} disabled={this.state.disabledButton}>Ещё...</button>
                <h4 className="cards__end-of-list-text">{this.state.isEndOfList ? 'Вы дошли до конца списка' : ''}</h4>
            </section>
        )
    }
}

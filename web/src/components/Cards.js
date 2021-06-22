import React from "react";
import Card from "./Card";
import data from "../data/data.xml";
let loadedPlanes = 0;
const planesData = {};
export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.moreButton = this.moreButton.bind(this);
        this.state = {
            isLoaded: false,
            data: {},
        }
    }

    moreButton(event) {
        
    }

    componentDidMount() {
        fetch(data)
        .then(resp => resp.text())
        .then(dataStr => new DOMParser()
        .parseFromString(dataStr, 'text/xml')
        .getElementsByTagName('product'))
        .then(
            (result) => {
                this.setState({
                    isLoaded: true
                })
                for (let i = 0; i < 3; i++) {
                    let newCharacteristics = {};
                    let propsAmount = result[loadedPlanes].children.length;
                    for (let j = 0; j < propsAmount; j++) {
                        let propName = result[loadedPlanes].children[j].attributes['applicPropertyIdent'].nodeValue;
                        let propValue = result[loadedPlanes].children[j].attributes['applicPropertyValues'].nodeValue;
                        newCharacteristics[propName] = propValue;
                    }
                    planesData[i] = newCharacteristics;
                    loadedPlanes++;
                }
                this.setState({
                    data: planesData,
                })
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        );
    }

    render() {
        const {data} = this.state;
        return (
            <section className="cards root__section">
                <Card characteristics = {data[0]} />
                <Card characteristics = {data[1]} />
                <Card characteristics = {data[2]} />
                <button className="cards__button">Ещё...</button>
            </section>
        )
    }
}

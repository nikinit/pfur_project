import React from "react";
import data from "../data/data.xml";
// import CardPopup from "./CardPopup";
let loadedPlanes = 0;
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            onLoaded: false,
            characteristics: {},
            logo: "https://4.bp.blogspot.com/-VCZ54hux6aA/VzxAQaAesPI/AAAAAAAAEAY/d9pFAjKYEIsR3_oWJfYR2pwRU9Pd6dW5gCLcB/s1600/68652_722142921137870_729498003_n.png"
            // TODO: fix logo problem so it goes with characteristics
        }
    }

    componentDidMount() {
        fetch(data)
        .then(resp => resp.text())
        .then(dataStr => new DOMParser()
        .parseFromString(dataStr, 'text/xml')
        .getElementsByTagName('product'))
        .then((result) => {
            this.setState({
                onLoaded: true
            })
            let newCharacteristics = {};
            let propsAmount = result[loadedPlanes].children.length;
            for (let i = 0; i < propsAmount; i++) {
                let propName = result[loadedPlanes].children[i].attributes['applicPropertyIdent'].nodeValue;
                let propValue = result[loadedPlanes].children[i].attributes['applicPropertyValues'].nodeValue;
                newCharacteristics[propName] = propValue;
                this.setState({
                    characteristics : newCharacteristics
                })
            }
            loadedPlanes++;
        })
    }

    render() {
        return (
            
            <div className="cards__card-main">
                <div className="cards__card-logo">
                    <img src={this.state.logo} alt="logo" className=""></img>
                </div>
                <div className="cards__card-info">
                    <div className="cards__card-general">
                        <h3 className="cards__card-prop cards__card-prop_name">{this.state.characteristics.model + " " + this.state.characteristics.minorModel + " " + this.state.characteristics.subModel}</h3>
                        <h4 className="cards__card-prop">{this.state.characteristics.registryNbr}</h4>
                    </div>
                    <div className="cards__card-buttons">
                        <button className="cards__button cards__card-button">Показать всё</button>
                        <button className="cards__button cards__card-button cards__card-button_change">Изменить</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

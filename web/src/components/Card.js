import React from "react";
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "https://4.bp.blogspot.com/-VCZ54hux6aA/VzxAQaAesPI/AAAAAAAAEAY/d9pFAjKYEIsR3_oWJfYR2pwRU9Pd6dW5gCLcB/s1600/68652_722142921137870_729498003_n.png",
            minorModel: "Boeing",
            registryNumber: "FA123A"
        }
    }
    render() {
        return (
            <div className="cards__card">
                <div className="cards__card-logo">
                    <img src={this.state.logo} alt="logo" className=""></img>
                </div>
                <div className="cards__card-info">
                    <div className="cards__card-general">
                        <h3 className="cards__card-name">{this.state.minorModel}</h3>
                        <h4 className="cards__card-registry-number">{this.state.registryNumber}</h4>
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

import React from "react";
import CardInfo from "./CardInfo";
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.showAllButton = this.showAllButton.bind(this);
        this.editButton = this.editButton.bind(this);
        this.state = {
            error: null,
            infoIsOpen: false,
            characteristics: this.props.characteristics,
            logo: "https://4.bp.blogspot.com/-VCZ54hux6aA/VzxAQaAesPI/AAAAAAAAEAY/d9pFAjKYEIsR3_oWJfYR2pwRU9Pd6dW5gCLcB/s1600/68652_722142921137870_729498003_n.png"
            // TODO: fix logo problem so it goes with characteristics
        }
    }

    showAllButton(event) {
        this.setState({
            infoIsOpen: !this.state.infoIsOpen
        })
    }

    editButton(event) {
        console.log(event)
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.characteristics !== undefined && 
            prevProps.characteristics === undefined) {
            this.setState({
                characteristics: this.props.characteristics
        });
        }
    }
    render() {
        const {infoIsOpen, characteristics} = this.state;
        return (
            <div className="cards__card-main">
                <div className="cards__card-logo">
                    <img src={this.state.logo} alt="logo" className=""></img>
                </div>
                <div className="cards__card-info">
                    <div className="cards__card-general">
                        <h3 className="cards__card-prop cards__card-prop_name">{characteristics.model + " " + characteristics.minorModel + " " + characteristics.subModel}</h3>
                        <h4 className="cards__card-prop">{characteristics.registryNbr}</h4>
                    </div>
                    <div className="cards__card-buttons">
                        <button className="cards__button cards__card-button" onClick={this.showAllButton}>Показать всё</button>
                        <button className="cards__button cards__card-button cards__card-button_change" onClick={this.editButton}>Изменить</button>
                    </div>
                </div>
                <CardInfo characteristics = {characteristics} infoIsOpen = {infoIsOpen}/>
            </div>
        )
    }
}

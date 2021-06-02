import React from "react";
export default class CardPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            model: props.model,
            minorModel: props.minorModel,
            subModel: props.subModel,
            registryNbr: props.registryNbr,
            lineNbr: props.lineNbr,
            operator: props.operator,
            electricalDifferences: props.electricalDifferences,
            airCondDifferences: props.airCondDifferences,
            modification: props.modification
        }
    }
    render() {
        return (
            <div className="cards__card-popup">
                <h4 className="cards__card-prop">Model : {this.state.model}</h4>
                <h4 className="cards__card-prop">minorModel : {this.state.minorModel}</h4>
                <h4 className="cards__card-prop">subModel : {this.state.subModel}</h4>
                <h4 className="cards__card-prop">registryNbr : {this.state.registryNbr}</h4>
                <h4 className="cards__card-prop">lineNbr : {this.state.lineNbr}</h4>
                <h4 className="cards__card-prop">operator : {this.state.operator}</h4>
                <h4 className="cards__card-prop">electricalDifferences : {this.state.electricalDifferences}</h4>
                <h4 className="cards__card-prop">airCondDifferences : {this.state.airCondDifferences}</h4>
                <h4 className="cards__card-prop">modification : {this.state.modification}</h4>
            </div>
        )
    }
}
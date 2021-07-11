import React from "react";
export default class CardInfo extends React.Component {
    
    render() {
        const {characteristics, infoIsOpen} = this.props;
        let characteristicsHtml = [];
        let keys = Object.keys(characteristics)
        for(let i = 0; i < keys.length; i++) {
            characteristicsHtml.push(
                <h4 className="cards__card-prop" key={keys[i]}>{keys[i]} : {characteristics[keys[i]]}</h4>
            )
        }
        
        // debugger;
        // console.log(characteristicsHtml)
        return (
            <div className="cards__card-full-info" style={{
                visibility: !infoIsOpen ? "hidden" : "visible"
                }}>
                {characteristicsHtml}
            </div>
        )
    }
}
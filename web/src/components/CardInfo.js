import React from "react";
export default class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristics: {}
        }
    }
    
    render() {
        const {characteristics, infoIsOpen} = this.props;
        let characteristicsHtml = [];
        for(let i = 0; i < Object.keys(characteristics).length; i++) {
            characteristicsHtml.push(
                <h4 className="cards__card-prop">{Object.keys(characteristics)[i]} : {characteristics[Object.keys(characteristics)[i]]}</h4>
            )
        }
        
        
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
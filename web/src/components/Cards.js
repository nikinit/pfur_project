import React from "react";
import Card from "./Card"
export default class Cards extends React.Component {
    render() {
        return (
            <section className="cards root__section">
                <Card />
                <Card />
                <Card />
                <button className="cards__button">Ещё...</button>
            </section>
        )
    }
}

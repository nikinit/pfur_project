import React from "react";
export default class AddSection extends React.Component {
    render () {
        return (
            <section className="add-section root__section">
                <h2 className="root__section-title">Добавить новый самолёт</h2>
                <form action="" className="form">
                    <label htmlFor="model" className="form__label">Model</label>
                    <input type="text" id="model" className="form__input" required></input>

                    <label htmlFor="minorModel" className="form__label">Minor model</label>
                    <input type="text" id="minorModel" className="form__input" required></input>

                    <label htmlFor="subModel" className="form__label">Sub model</label>
                    <input type="text" id="subModel" className="form__input" required></input>

                    <label htmlFor="registryNumber" className="form__label">Регистрационный номер</label>
                    <input type="text" id="registryNumber" className="form__input" required></input>

                    <label htmlFor="operator" className="form__label">Operator</label>
                    <input type="text" id="operator" className="form__input" required></input>

                    <label htmlFor="electricalDifferences" className="form__label">Electrical differences</label>
                    <input type="text" id="electricalDifferences" className="form__input" required></input>

                    <label htmlFor="airCondDifferences" className="form__label">Air conditional differences</label>
                    <input type="text" id="airCondDifferences" className="form__input" required></input>

                    <label htmlFor="modification" className="form__label">Modification</label>
                    <input type="text" id="modification" className="form__input" required></input>

                    <button type="submit" className="form__button">Добавить</button>
                </form>
            </section>
        )
    }
}
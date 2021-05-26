import React from "react";
export default class DeleteSection extends React.Component {
    render() {
        return (
            <section className="delete-section root__section">
                <h2 className="root__section-title">Удалить самолёт</h2>
                <form action="" className="form">
                    <label htmlFor="registryNumber" className="form__label">Регистрационный номер</label>
                    <input type="text" id="registryNumber" className="form__input" required></input>
                    <button type="submit" className="form__button">Удалить</button>
                </form>
            </section>
        )
    }
}
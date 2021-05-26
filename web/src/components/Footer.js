import React from "react";
export default class Footer extends React.Component {
    render () {
        return (
            <section className="footer root__section">
                <h3 className="footer__subscription">©2021 PFUR. Made by
                    <a className="footer__link" href="https://github.com/nikinit"> Nikita Kulichenko</a> and
                    <a className="footer__link" href="https://github.com/Laicell"> Ilya Gudkov</a>
                </h3>
            </section>
        )
    }
}
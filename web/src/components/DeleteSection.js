import React from "react";
import data from "../data/data.xml";
import axios from "axios";
const xml2js = require('xml2js');

export default class DeleteSection extends React.Component {
    constructor(props) {
        super(props);
        this.deleteButton = this.deleteButton.bind(this);
    }
    deleteButton = (e) => {
        e.preventDefault();
        let userRegistryNbr = document.querySelector('#deleteByRegistryNbr').value,
            planeExists = false,
            parser = new xml2js.Parser(),
            xmlBuilder = new xml2js.Builder(),
            updatedXml = '';
        
        fetch(data)
        .then(resp => resp.text())
        .then(str => {
            parser.parseString(str, (err, result) => {
                let objXml = result;
                let products = objXml.dmodule.content[0].productCrossRefTable[0].product;
                for (let i = 0; i < products.length; i++) {
                    let assigns = products[i].assign;
                    for (let j = 0; j < assigns.length; j++) {
                        let assign = assigns[j]['$'];
                        if(assign.applicPropertyIdent === 'registryNbr' && assign.applicPropertyValues === userRegistryNbr) {
                            planeExists = true;
                            console.log('Found it!');
                            products.splice(i, 1);
                            updatedXml = xmlBuilder.buildObject(objXml);
                            fetch(data, {
                                method: 'POST',
                                body: updatedXml,
                                headers: {
                                    'Content-Type': 'text/xml; charset=utf-8'
                                },
                            });
                            debugger;
                            
                        }
                    }
                }
                if (!planeExists) {
                    console.log('No such plane');
                    console.log(products);
                    debugger;
                }
            })
        })
        

    }
    render() {
        return (
            <section className="delete-section root__section">
                <h2 className="root__section-title">Удалить самолёт</h2>
                <form action="" className="form">
                    <label htmlFor="deleteByRegistryNbr" className="form__label">Регистрационный номер</label>
                    <input type="text" id="deleteByRegistryNbr" className="form__input" required></input>
                    <button type="submit" className="form__button" onClick={this.deleteButton}>Удалить</button>
                </form>
            </section>
        )
    }
}


// axios.get(data, {"Content-Type": "application/xml; charset=utf-8"
                                // })
                                // .then(resp => {
                                //     parser.parseString(resp.data, (err, result) => {
                                //         let obj = result;
                                //         obj.dmodule.content[0].productCrossRefTable[0].product.splice(2,1);
                                //         console.log(xmlBuilder.buildObject(obj));
                                        
                                //         debugger;
                                //     })
                                // })
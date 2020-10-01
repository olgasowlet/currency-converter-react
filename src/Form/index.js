import React, { useState } from "react";
import "./style.css";
import Result from "./Result";


const Form = (props) => {

    const [amount, setAmount] = useState(0);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Kwota: ${amount}`);
    };

    const onInputChange = ({ target }) => setAmount(target.value);


    return (
        <form className="conventer" onSubmit={onFormSubmit}>
            <label className="conventer__label">
                Kwota: <input className="conventer__input" value={amount} onChange={onInputChange} type="number" min="0" required />
            </label>
            <label className="conventer__label">
                Z:
            <select className="conventer__select" name="currency" required>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="CZK">CZK</option>
                </select></label>
            <label className="conventer__label">
                Na:
            <select className="conventer__select" name="currency" required>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="CZK">CZK</option>
                </select>
            </label>
            <button className="conventer__button">Przelicz</button>
            <Result />
        </form>
    );
};

export default Form;
import React, { useState } from "react";
import "./style.css";
import Result from "./Result";
import { currencies } from "../currencies";

const Form = (props) => {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState(currencies[0].value);
    const [toCurrency, setToCurrency] = useState(currencies[0].value);
    const [result, setResult] = useState(0);

    const onInputChange = ({ target }) => setAmount(target.value);

    const onFirstSelectChange = ({ target }) => setFromCurrency(target.value);

    const onSecondSelectChange = ({ target }) => setToCurrency(target.value);

    const calculateCurrency = (fromCurrency, toCurrency, amount) => {
        for (const currency of currencies) {
            let rate = currency.rate;

            if (fromCurrency === currency.value) {
                amount *= rate;
            };

            if (toCurrency === currency.value) {
                amount = amount / rate;
            };
        };
        return setResult(amount);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateCurrency(fromCurrency, toCurrency, amount);
    };

    return (
        <form className="conventer" onSubmit={onFormSubmit}>
            <label className="conventer__label">
                Kwota: <input className="conventer__input" value={amount} onChange={onInputChange} type="number" min="0" required />
            </label>
            <label className="conventer__label">
                Z:
            <select className="conventer__select" value={fromCurrency} onChange={onFirstSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
            </select></label>
            <label className="conventer__label">
                Na:
            <select className="conventer__select" value={toCurrency} onChange={onSecondSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
            </select></label>
            <button className="conventer__button">Przelicz</button>
            <Result result={result} toCurrency={toCurrency} />
        </form>
    );
};

export default Form;
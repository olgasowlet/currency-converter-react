import React, { useState } from "react";
import "./style.css";
import Result from "./Result";
import { currencies } from "../currencies";

const Form = (props) => {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState(currencies[0].value);
    const [toCurrency, setToCurrency] = useState(currencies[0].value);
    const [result, setResult] = useState();

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
        setResult({
            amount: +amount,
            toCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateCurrency(fromCurrency, toCurrency, amount);
    };

    return (
        <form className="converter" onSubmit={onFormSubmit}>
            <label className="converter__label">
                Kwota: <input className="converter__input" value={amount} onChange={onInputChange} type="number" min="0" required />
            </label>
            <label className="converter__label">
                Z:
            <select className="converter__select" value={fromCurrency} onChange={onFirstSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
            </select></label>
            <label className="converter__label">
                Na:
            <select className="converter__select" value={toCurrency} onChange={onSecondSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
            </select></label>
            <button className="converter__button">Przelicz</button>
            <Result result={result} />
        </form>
    );
};

export default Form;
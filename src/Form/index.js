import React, { useState } from "react";
import { StyledForm, Label, StyledInput, Select, Button } from "./style";
import Result from "./Result";
import { currencies } from "../currencies";
import { useApiData } from "../apiData";

const Form = (props) => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState(currencies[0].value);
    const [toCurrency, setToCurrency] = useState(currencies[0].value);
    const [result, setResult] = useState();

    useApiData();

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
        <StyledForm onSubmit={onFormSubmit}>
            <Label>
                Kwota: <StyledInput value={amount} onChange={onInputChange} type="number" min="0" required />
            </Label>
            <Label>
                Z:
            <Select className="converter__select" value={fromCurrency} onChange={onFirstSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
                </Select></Label>
            <Label>
                Na:
            <Select className="converter__select" value={toCurrency} onChange={onSecondSelectChange} name="currency" required>
                    {currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.value}</option>
                    ))}
                </Select></Label>
            <Button className="converter__button">Przelicz</Button>
            <Result result={result} />
        </StyledForm>
    );
};

export default Form;
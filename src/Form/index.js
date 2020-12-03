import React, { useState } from "react";
import { StyledForm, Label, StyledInput, Select, Button, Loading, Error } from "./style";
import Result from "./Result";
import { useApiData } from "../apiData";

const Form = (props) => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("PLN");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const dataApi = useApiData();

    const onInputChange = ({ target }) => setAmount(target.value);

    const onFirstSelectChange = ({ target }) => setFromCurrency(target.value);

    const onSecondSelectChange = ({ target }) => setToCurrency(target.value);

    const calculateCurrency = (fromCurrency, toCurrency, amount) => {
        for (const currency in dataApi.rates) {
            let rate = dataApi.rates[currency];

            if (fromCurrency === currency) {
                amount *= rate;
            };

            if (toCurrency === currency) {
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
            {dataApi.status === "ładowanie" ? (<Loading>Ładowanie..</Loading>) : (dataApi.status === "Wystąpił błąd" ? (<Error>Coś się popsuło :/</Error>) : (
                <>
                    <Label>
                        Kwota: <StyledInput value={amount} onChange={onInputChange} type="number" min="0" required />
                    </Label>
                    <Label>
                        Z:
            <Select className="converter__select" value={fromCurrency} onChange={onFirstSelectChange} name="currency" required>
                            {Object.keys(dataApi.rates).map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </Select></Label>
                    <Label>
                        Na:
            <Select className="converter__select" value={toCurrency} onChange={onSecondSelectChange} name="currency" required>
            {Object.keys(dataApi.rates).map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </Select>
                    </Label>
                    <Button className="converter__button">Przelicz</Button>
                    <Result result={result} />
                </>
            ))}
        </StyledForm>
    );
};

export default Form;
import { useState, useEffect } from "react";
import axios from "axios";

export const GetApiData = () => {
    const [currency, setCurrency] = useState();

    useEffect(() => {
        axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
            .then((response) => {
                setCurrency({
                    value: response.data.rates,
                    date: response.data.date
                })
            })
    }, []);

    console.log(currency);

    return currency;
};


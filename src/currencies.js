import axios from "axios";

export const currencies = [
    {
        value: "PLN",
        rate: 1,
    },
    {
        value: "EUR",
        rate: 4.4,
    },
    {
        value: "CZK",
        rate: 0.16,
    },
    {
        value: "USD",
        rate: 3.7,
    },
];

const getCurrencies = async () => {
    try {

        const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");

        const currenciesAPI = response.data.rates;

        return currenciesAPI;

    } catch (error) {

        console.error("Something bad happened!", error);

    }
};

getCurrencies().then((response) => console.log(response));

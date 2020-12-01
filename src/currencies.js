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
    return axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then(response => JSON.stringify(response.data));
};

getCurrencies().then((response) => console.log(response));

export { getCurrencies };


import { useState, useEffect } from "react";
import axios from "axios";

const useApiData = () => {
    const [dataAPI, setDataAPI] = useState({
        status: "ładowanie"
    });

    useEffect(() => {
        const getDataFromApi = async() => {
            try {
                const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");

                const { rates, base, date } = await response.data;

                setDataAPI({
                    status: "Dane zostały załadowane",
                    rates,
                    base,
                    date
                });
            } catch (error) {
                console.error(error);
                
                setDataAPI({
                    status: "Wystąpił błąd"
                })
            }
        }
        setTimeout(getDataFromApi, 2000);
    }, [])
    console.log(dataAPI);
    return dataAPI;
};


export { useApiData };
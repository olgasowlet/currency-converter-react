import React, { useState, useEffect } from "react";
import { StyledDate } from "./style";

const formatDate = (date) => {
    return date.toLocaleString("pl",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
};

const PlaceForDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <StyledDate>
            <span>Dzisiaj jest {formatDate(date)}</span>
        </StyledDate>
    );
};

export default PlaceForDate;
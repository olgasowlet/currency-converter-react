import React, { useState, useEffect } from "react";
import "./style.css";

const PlaceForDate = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(date => new Date().toLocaleString( "pl", {weekday: "long", day:"numeric", month:"long", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"}));
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, [])

    return (
        <div className="dateContainer">
            <span>Dzisiaj jest {date}</span>
        </div>
    );
};

export default PlaceForDate;
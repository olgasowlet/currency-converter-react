import React from "react";
import "./style.css";

//TUTAJ TYLKO PRZEKAZUJE I WYŚWIETLAM RESULT

const Result = (props) => {
    return (
        <div className="conventer__result">{props.result.toFixed(2)} {props.toCurrency}</div>
    );
};

export default Result;
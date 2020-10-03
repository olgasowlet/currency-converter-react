import React from "react";
import "./style.css";

const Result = (props) => (
    <div className="conventer__result">{props.result.toFixed(2)}&nbsp;{props.toCurrency}</div>
);


export default Result;
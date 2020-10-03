import React from "react";
import "./style.css";

const Result = ({ result, toCurrency }) => (
    <div className="conventer__result">{result.toFixed(2)}&nbsp;{toCurrency}</div>
);


export default Result;
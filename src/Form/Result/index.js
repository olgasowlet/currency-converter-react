import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <div className="conventer__result">{!!result ? <> {result.amount.toFixed(2)}&nbsp;{result.toCurrency} </> : " "}</div>
);


export default Result;
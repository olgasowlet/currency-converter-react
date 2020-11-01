import React from "react";
import { StyledResult } from "./style";

const Result = ({ result }) => (
    <StyledResult>{!!result ? <> {result.amount.toFixed(2)}&nbsp;{result.toCurrency} </> : " "}</StyledResult>
);


export default Result;
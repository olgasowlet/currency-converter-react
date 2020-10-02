import React from "react";
import "./style.css";

//TUTAJ TYLKO PRZEKAZUJE I WYŚWIETLAM RESULT

const Result = (props) => (
    <div className="conventer__result">{props.result}</div>
);

export default Result;
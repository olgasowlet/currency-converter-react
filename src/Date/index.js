import React from "react";
import { StyledDate } from "./style";
import {useCurrentDate, formatDate} from "../useCurrentDate";

const PlaceForDate = () => {

    const currentDate = useCurrentDate();

    return (
        <StyledDate>
            <span>Dzisiaj jest {formatDate(currentDate)}</span>
        </StyledDate>
    );
};

export default PlaceForDate;
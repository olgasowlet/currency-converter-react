import React from "react";
import { StyledFooter } from "./style";
import { useApiData } from "../apiData";

const Footer = () => {
    const date = useApiData();

    return <StyledFooter>
        Dane z {date.date}. Pozdrawiam i życzę miłego dnia - Olga ;*
    </StyledFooter>
};

export default Footer;
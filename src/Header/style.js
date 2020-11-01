import styled from "styled-components";

export const Title = styled.h1`
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 0px 0px #a07b24d3;
    font-size: 80px;
    font-family: 'Montserrat Subrayada', sans-serif;
    margin: 30px 50px;

    @media (max-width: 769px) {
        font-size: 40px;
    }

    @media (max-width: 424px) {
        margin: 10px auto;
        font-size: 40px;
    }
`;
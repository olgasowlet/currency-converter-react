import styled from "styled-components";

export const StyledResult = styled.div`
    color: ${({theme}) => theme.fontColor};
    font-size: 50px;
    text-align: center;
    margin-top: 20px;

    @media (max-width: 769px) {
        font-size: 50px;
        margin: 10px auto;
    }
`;
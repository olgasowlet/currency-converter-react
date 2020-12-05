import styled from "styled-components";

const StyledForm = styled.form`
    font-size: 30px;
    text-align: center;
    padding: 10px;

    @media (max-width: 769px) {
        padding: 0px;
        font-size: 20px;
        margin: auto;
        width: 200px;
    }
`;

const Label = styled.label`
    margin: 5px 20px;

    @media (max-width: 769px) {
        display: block;
        margin: 30px 0;
        width: unset;
        height: unset;
    }
`;

const StyledInput = styled.input`
    background-color: transparent;
    color: ${({theme}) => theme.fontColor};
    border: 1px solid ${({theme}) => theme.fontColor};
    width: 150px;
    margin-bottom: 20px;
    margin-left: 7px;
    height: 40px;

    @media (max-width: 769px) {
        width: 100px;
        height: unset;
        margin: 0px;
    }
`;

const Select = styled.select`
    background-color: transparent;
    color: ${({theme}) => theme.fontColor};
    border: 1px solid ${({theme}) => theme.fontColor};
    width: 100px;
    margin-bottom: 20px;
    margin-left: 7px;
    height: 40px;

    @media (max-width: 769px) {
        width: unset;
        height: unset;
        font-size: 20px;
        margin: 0px;
        margin-left: 6px;
    }
`;

const Button = styled.button`
    margin: 20px 0;
    background-color: ${({theme}) => theme.fontColor};
    text-transform: uppercase;
    color: ${({theme}) => theme.secondColor};
    padding: 5px;
    font-weight: bold;
    border: none;

    &:hover {
        color: ${({theme}) => theme.fontColor};
    background-color: ${({theme}) => theme.secondColor};
    outline: 2px solid ${({theme}) => theme.fontColor};
    }

    @media (max-width: 769px) {
        margin-bottom: 10px;
        padding: 12px;
    }
`;

const Loading = styled.div`
    text-align: center;
    color: ${({theme}) => theme.fontColor}
`;

const Error = styled.div`
    text-align: center;
    color: ${({theme}) => theme.fontColor}
`;

export { StyledForm, Label, StyledInput, Select, Button, Loading, Error};
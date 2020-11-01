import styled from "styled-components";
import myImage from "../images/background.jpg";

export const StyledMain = styled.main`
    color: #FABC2A;
    font-family: 'Muli', sans-serif;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7) 60%, rgba(80, 57, 7, 0.7)), url(${myImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;
    height: 100vh;

    @media (max-width: 1035px) {
        background-image: unset;
        background-color: rgb(37, 36, 36);
    }
`;
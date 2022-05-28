import styled from "styled-components";

const Input = styled.input`
    // width: 303px;
    width:100%;
    height: 45px;
    background-color: ${props=> props.color ? "var(--color-disable)" : "var(--white)"};
    border: 1px solid ${props=> props.color ? "var(--border-disable)" : "#D5D5D5"};
    border-radius: 5px;
    padding: 14px;
    margin-bottom: 6px;

    ::placeholder {
        color: var(--input-text);
        font-family: 'Lexend Deca', sans-serif;
      }
`;

export default Input;
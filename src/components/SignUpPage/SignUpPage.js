import { Link } from "react-router-dom";
import styled from "styled-components";

import BigLogo from "../../shared/BigLogo";
import SignUpForm from "./SingUpForm";

export default function SignUpPage(){

    return (
        <Container>
            <BigLogo />
            <SignUpForm />
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--background-button);
    margin-top:25px;
`;
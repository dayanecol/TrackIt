import { Link } from "react-router-dom";
import styled from "styled-components";

import BigLogo from "../../shared/BigLogo";
import LoginForm from "./LoginForm";

export default function LoginPage(){

    return (
        <Container>
            <BigLogo />
            <LoginForm  />
            <StyledLink to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 36px 0 36px;
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
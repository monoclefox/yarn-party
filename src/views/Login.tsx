import { useState } from "react";
import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import partyIcon from "../assets/party.svg";
import { Link } from "@tanstack/react-router";
import { ButtonHTMLAttributes } from "react";

const StyledForm = styled.form`
    position: relative;
    border: 1px solid #F2F2901A;
    border-radius: 20px;
    padding: 40px 80px;
    top: -80px;
    background-color: var(--background-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const StyledLogin = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`;

const StyledHeadline = styled.div`
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: -16px;
`;

const StyledSubheadline = styled.div`
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.05em;
`;

const StyledSubHeadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 24px;
`;

const StyledPartyIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const StyledButton = styled(Button)<ButtonHTMLAttributes<HTMLButtonElement> & { disabled?: boolean }>`
    margin-top: 24px;
`;

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 73px;
`;      

const StyledFooterText = styled(Link)`
    font-size: 17px;
    font-weight: 400;
`;

const StyledFooterLink = styled(Link)`
    font-size: 17px;
    font-weight: 700;
    color: var(--highlight-color-2);
    cursor: pointer;
`;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, password);
    }

    return <StyledLogin>
        <StyledForm method="post" onSubmit={handleSubmit}>
            <StyledHeadline>Welcome!</StyledHeadline>
            <StyledSubHeadWrapper>
                <StyledSubheadline>Sign into Yarn Party.</StyledSubheadline>
                <StyledPartyIcon src={partyIcon} />
            </StyledSubHeadWrapper>
            <Input
                type="email"
                placeholder="me@example.com"
                name="email"
                id="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton type="submit">Log In</StyledButton>
            <StyledFooter>
            <StyledFooterText to="/reset-password">Reset Password</StyledFooterText>
                <StyledFooterLink to="/signup">Sign up</StyledFooterLink>
            </StyledFooter>
        </StyledForm>
    </StyledLogin>
}

export default Login;


import styled from "@emotion/styled";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 24px;
    gap: 10px;
    background: var(--highlight-color-2);
    border-radius: 80px;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 17px;
    line-height: 44px;
    text-align: center;
    color: #000000;
    cursor: pointer;
    width: 100%;
`;

function Button({children, className}: {children: React.ReactNode, className?: string}) {
    return <StyledButton className={className}>{children}</StyledButton>
}

export default Button;


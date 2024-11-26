import { useState } from "react";
import styled from "@emotion/styled";
import visibilityIcon from "../assets/visibility.svg";
import visibilityOffIcon from "../assets/visibilityOff.svg";

interface InputProps {
    type: string;
    placeholder: string;
    id: string;
    label: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
`;


const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const StyledVisibilityIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 48px;
    cursor: pointer;
`;

const StyledInput = styled.input`
    width: 320px;
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 12px;
    background-color: var(--button-background-color);
    color: var(--text-color);
    font-size: 17px;
    &:focus {
        outline: none;
        border: 2px solid var(--highlight-color-2);
    }
`;

const StyledLabel = styled.label`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;
    background-color: var(--background-color);
    padding: 0 6px;
`;

function Input({type, placeholder, id, label, value, onChange}: InputProps) {
    const [inputType, setInputType] = useState(type);

    return <StyledInputContainer>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInputWrapper>
        <StyledInput 
            type={inputType} 
            placeholder={placeholder} 
            id={id} 
            value={value} 
            onChange={onChange} 
        />
        {type === "password" && 
            <StyledVisibilityIcon 
            src={inputType === "password" ? visibilityIcon : visibilityOffIcon} 
                onClick={() => setInputType(inputType === "password" ? "text" : "password")}
            />}
        </StyledInputWrapper>
    </StyledInputContainer>
}

export default Input;
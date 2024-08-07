import React, { useState } from "react";
import styled from "styled-components";

interface FloatingLabelInputProps {
    label:string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);
    const handleChange = (e: any) => setValue(e.target.value);

    return (
        <InputContainer>
            <StyledInput
                {...props}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                placeholder=" "
            />
            <StyledLabel focused={focused}>{label}</StyledLabel>
        </InputContainer>
    );
};

const InputContainer = styled.div`
    position: relative;   
    width: 100%;
    color: #878484;            
    line-height: 40px;                
`;

const StyledInput = styled.input`
    width: 100%;    
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f0f0f0;    

    &:focus {
        outline: none;
        border: 1px solid #f0f0f0; 
        border-bottom: 2px solid #000; 
        top: -3px;      
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {        
        font-size: 12px;
        color: #878484;
    }
`;

const StyledLabel = styled.label<{ focused: boolean }>`
    position: absolute;
    left: 10px;
    top: ${({ focused }) => (focused ? "-10px" : "10px")};
    font-size: ${({ focused }) => (focused ? "10px" : "16px")};
    color: "#878484";
    transition: all 0.2s ease;
    pointer-events: none;    
    padding: 0 4px;
`;

export default FloatingLabelInput;
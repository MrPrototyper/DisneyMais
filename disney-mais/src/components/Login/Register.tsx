import styled from "styled-components"
import FloatingLabelInput from "./FloatingLabelInput";
import { Box, Button, Container, Content, Footer, InputInfo, Logo, Message, Step, Title, WhiteLogo } from "./Login.styles";
import CheckBoxInput from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../features/user/actions";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { loginInfo } = useSelector((state: RootState) => state.loginInfo);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        if (password && loginInfo?.email) {            
            await dispatch(createUser({email: loginInfo.email, password: password}));   
            navigate('/home');
        } else {
            setErrorMessage('Please make sure your password is at least six characters, includes at least one number or special character and is not a commonly used password.');
        }
    }
    
    return (
        <Container>
            <WhiteLogo>
                <img src='/images/white-logo.png' />
            </WhiteLogo>
            <Box>
                <Logo>
                    <span>My</span>
                    <img src='/images/small-disney.png' />                    
                </Logo>
                <Content>                    
                    <Step>STEP 2</Step>
                    <Title>Create an account to continue</Title>
                    <Message>
                        <div>With a MyDisney account, you can log in to Disney+ and other services across The Walt Disney Family of Companies.</div>
                        <div style={{ marginTop: '20px', marginBottom: '20px', fontSize: '18px', letterSpacing: '1.4'}}>Create your account using <strong>{ loginInfo?.email }</strong> (<a>edit</a>)</div>
                    </Message>                                        
                    <FloatingLabelInput label='Choose a password' value={password} onChange={handlePasswordChange}/>
                    <InputInfo type={errorMessage ? 'error' : 'info'}>{errorMessage ? errorMessage : 'Use a minimum of 6 characters (case sensitive) with at least one number or special character.'}</InputInfo>                    
                    <CheckBoxInput label='' />                    
                </Content>                
                <Footer>
                    <p style={{lineHeight: 1.7}}>We may use your data as described in our Privacy Policy. By clicking "Agree & Continue", you agree to the Disney Terms of Use with respect to your MyDisney account and acknowledge that you have read our Privacy Policy, Cookies Policy, and UK & EU Privacy Rights.</p>                    
                    <Button onClick={handleSignUp}>Agree & Continue</Button>
                </Footer>
            </Box>
        </Container>
        
    )};

export default Register;

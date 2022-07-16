import React, { useState, useEffect }  from 'react';
import AuthBox from '../Shared/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from '../LoginPages/LoginPageInputs';
import { validateLoginFormFields } from '../Utils/ValidateLoginFormFields';
const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // If any of these variables change we need 
    useEffect(() => {
        setIsFormValid(validateLoginFormFields({mail, password}));
    }, [mail, password, setIsFormValid]);

    return (
        <AuthBox>
            <LoginPageHeader/>
            <LoginPageInputs
               mail={mail}
               setMail={setMail}
               password={password}
               setPassword={setPassword}
               isFormValid={isFormValid}/>
        </AuthBox>
    );
};

export default LoginPage;
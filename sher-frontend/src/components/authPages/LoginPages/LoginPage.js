import React, { useState }  from 'react';
import AuthBox from '../Shared/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from '../LoginPages/LoginPageInputs';
const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthBox>
            <LoginPageHeader/>
            <LoginPageInputs
               mail={mail}
               setMail={setMail}
               password={password}
               setPassword={setPassword}/>
        </AuthBox>
    );
};

export default LoginPage;
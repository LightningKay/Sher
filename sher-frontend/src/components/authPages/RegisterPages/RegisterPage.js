import React from 'react';
import AuthBox from '../Shared/AuthBox'
import RegisterPageHeader from './ResgisterPageHeader';
import RegisterPageInputs from './RegisterPageInputs';
const RegisterPage = () => {
    return (
        <AuthBox>
            <RegisterPageHeader/>
            <RegisterPageInputs/>
        </AuthBox>
    );
};

export default RegisterPage;
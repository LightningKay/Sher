import React from 'react';
import { TextField, Button, Link } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory, useNavigate } from 'react-router-dom';

const RegisterPageInputs = ({mail, setMail, password, setPassword, isFormValid}) => {
    const navigate = useNavigate();

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const redirectToRegisterPage = () => {
        navigate('/register');
    };

    return (
        <div style={{width:'100%'}}>
            <Box sx={{ display : 'flex',
                       flexDirection: 'column',
                       justifyContent : 'space-between',
                       p : 1, 
                       m : 1}}>

                <TextField
                    value = {mail}
                    required
                    label="E-Mail"
                    onChange={handleMailChange}
                    sx={{ input : {color : 'white'} ,fullWidth : 'true', fontFamily : 'Segoe UI Symbol', m : 1}}/>

                <TextField
                    value = {mail}
                    required
                    label="User name"
                    onChange={handleMailChange}
                    sx={{ input : {color : 'white'} ,fullWidth : 'true', fontFamily : 'Segoe UI Symbol', m : 1}}/>

                <TextField
                    value = {password}
                    required
                    label="Password"
                    type="password"
                    onChange={handlePasswordChange}
                    sx={{ input : {color : 'white'} ,fullWidth : 'true', fontFamily : 'Segoe UI Symbol', m : 1}}/>

                <Button
                    variant="outlined"
                    disabled={!isFormValid} 
                    sx={{ color : 'black',
                          fontFamily : 'Segoe UI Symbol',
                          '&:hover' : {color : 'white'},
                           m : 1 }}>Login
                </Button>
            </Box>
        </div>
    );
};

export default RegisterPageInputs;
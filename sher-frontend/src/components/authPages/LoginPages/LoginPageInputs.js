import React from 'react';
import { TextField, Button, Link } from '@mui/material';
import { Box } from '@mui/system';

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

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
                    label="User Name"
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
                    sx={{ color : 'black',
                        fontFamily : 'Segoe UI Symbol',
                        '&:hover' : {color : 'white'},
                        m : 1 }}>Login
                </Button>

                <Link sx={{color : 'black', m : 1,  '&:hover' : {color : 'white'}}}>New User</Link>
            </Box>
        </div>
    );
};

export default LoginPageInputs;
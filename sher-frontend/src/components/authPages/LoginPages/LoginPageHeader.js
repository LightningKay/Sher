import React from 'react';
import { Typography } from '@mui/material';
import { TextField, Button, Link } from '@mui/material';
import { Box, fontFamily } from '@mui/system';
import {styled} from '@mui/system';
const RegisterPage = styled('div')({
    alignItems : 'center',
    background : '#FFFFFF'
});

const LoginPageHeader = () => {
    return (
       <>
        <Box sx={{ padding : '30px'}}>
        <Typography variant="h4" sx={{color : 'white', fontFamily : 'Segoe UI Symbol'}}>
            Welcome to Sher
        </Typography>
        <Typography variant="h6" sx={{color : 'white', fontFamily : 'Segoe UI Symbol'}}>
            Login to proceed
        </Typography>
        </Box>

        <div style={{width:'100%'}}>
            <Box sx={{ display : 'flex',
                       flexDirection: 'column',
                       justifyContent : 'space-between',
                       p : 1, 
                       m : 1}}>
                <TextField
                    required
                    label="User Name"
                    sx={{ input : {color : 'white'} ,fullWidth : 'true', fontFamily : 'Segoe UI Symbol', m : 1}}/>

                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
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
      </>
    );
}

export default LoginPageHeader;
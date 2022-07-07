import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
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
      </>
    );
}

export default LoginPageHeader;
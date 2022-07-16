import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const RegisterPageHeader = () => {
    return (
       <>
        <Box sx={{ padding : '30px'}}>
            <Typography variant="h4" sx={{color : 'white', fontFamily : 'Segoe UI Symbol'}}>
                Welcome to 
            </Typography>
            <Typography variant="h6" sx={{color : 'white', fontFamily : 'Segoe UI Symbol'}}>
                Register to proceed
            </Typography>
        </Box>
      </>
    );
}

export default RegisterPageHeader;
import React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';

// Wraps the Box component
const BoxWrapper = styled('div')({
    width  : '100%',
    height : '100vh',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    background : '#FFFFFF'
});

const AuthBox = (props) => {
    return (
        <BoxWrapper>
            <Box sx={{
                width : 700,
                height : 400,
                bgcolor: '#0392CE',
                borderRadius : '5px',
                boxShadow : '0 2px 10px 0 rgb(000 / 20%)',
                display : 'flex',
                flexDirection : 'column',
                padding : '25px',
                '&:hover' : {
                    backgroundColor: '#0462CE',
                }
            }}>
                {props.children}
            </Box>
        </BoxWrapper>
    );
}

export default AuthBox;
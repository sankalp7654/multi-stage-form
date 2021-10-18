import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const GeneralDetails = (props) => {
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 5, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="First Name" variant="outlined" defaultValue={props.values.firstName} onChange={(e) => props.updateFirstName(e.target.value)} value={props.firstName} />

            <TextField id="outlined-basic" label="Last Name" variant="outlined" defaultValue={props.values.lastName} onChange={(e) => props.updateLastName(e.target.value)} />
            
            <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={props.values.email} onChange={(e) => props.updateEmail(e.target.value)} />

            <TextField id="outlined-basic" label="Password" variant="outlined" defaultValue={props.values.password} onChange={(e) => props.updatePassword(e.target.value)} />

            {   console.log(props)    }
            <br/>  

                <Button variant="contained" size="medium" onClick={props.nextStep}>
                Next
                </Button>
                
        </Box>

    );
}


export default GeneralDetails;
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Review = (props) => {

    const val = props;
    console.log(val);
    const {firstName, lastName, country, email, password, yearPassedOut, college} = props.values;
    console.log(firstName)

    return (    
        <Box component="form"
            sx={{
                '& > :not(style)': { m: 5, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

            <TextField
                id="outlined-read-only-input"
                label="First Name"
                defaultValue={props.values.firstName}
                InputProps={{
                    readOnly: true,
                }}
            />

            <TextField
                id="outlined-read-only-input"
                label="Last Name"
                defaultValue={props.values.lastName}
                InputProps={{
                    readOnly: true,
                }}
            />

        <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue={props.values.email}
                InputProps={{
                    readOnly: true,
                }}
            />

        <TextField
                id="outlined-read-only-input"
                label="Year Passed Out"
                defaultValue={props.values.yearPassedOut}
                InputProps={{
                    readOnly: true,
                }}
            />

        <TextField
                id="outlined-read-only-input"
                label="College"
                defaultValue={props.values.college}
                InputProps={{
                    readOnly: true,
                }}
            />

            <br/>  
                <Button variant="contained" size="medium" onClick={props.prevStep}>
                Back
                </Button>


                <Button variant="contained" size="medium" onClick={() => alert('Submitted Successsfully')}>
                Submit
                </Button>
        </Box>
    );

}

export default Review;
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EducationDetails = (props) => {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 5, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="College" variant="outlined" defaultValue={props.values.college} onChange={(e) => props.updateCollegeName(e.target.value)} />

            <TextField id="outlined-basic" label="Year Passed Out" variant="outlined" defaultValue={props.values.yearPassedOut} onChange={(e) => props.updateYearPassedOut(e.target.value)}/>
        
            {console.log(props)}
            <br/>  
                <Button variant="contained" size="medium" onClick={props.prevStep}>
                Back
                </Button>


                <Button variant="contained" size="medium" onClick={props.nextStep}>
                Next
                </Button>
                
        </Box>
    )

}


export default EducationDetails;
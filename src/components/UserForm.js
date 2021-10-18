import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GeneralDetails from './GeneralDetails';
import EducationDetails from './EducationDetails';
import Review from './Review';

// const myfunction = (props) => {
//     return (
//         <h1>yess</h1>
//     );
// }
// // create state using useStateHook
// // when to use hook? for state manipulation. there will be no constructor
// // if you need a state you will need a hook

// const [example, setExample] = useState('');
// setExample('Sankalp');

// // use effect will be called only one time if you pass the dependency array
// // this is componentDidMount()
// useEffect(() => {
//     // Your code here
//   }, []);

const UserForm = () => {

    // Setting up the initial state of the application variables using useState hook
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [yearPassedOut, setYearPassedOut] = useState(0);
    const [college, setCollege] = useState('');
   
    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)

    // The arrow function without {} do implicit returns the result.
    const handleFirstNameChange = (input) => setFirstName(input);
    const handleLastNameChange = (input) => setLastName(input);
    const handleEmailChange = (input) => setEmail(input);
    const handleCollegeChange = (input) => setCollege(input);
    const handleYearPassedOutChange = (input) => setYearPassedOut(input);
    const handlePasswordChange = (input) => setPassword(input);


    // The useEffect takes two parameter as an input. 
    // The second argument is a dependency array, and the first argument is a function
    // The function gets executed when the state or values of the parameter in the dependency function changes!!
    useEffect(() => {
        if(step == 2) {
            alert("You are in the second step!")
        }
    }, [step])

    const renderSwitch = () => {
        const currentStep = step;
        console.log(currentStep)

        const values = {step, email, firstName, lastName, password, yearPassedOut, college}       
        console.log(values)
       
        switch(currentStep) {
            case 1: 
                console.log('here')
                return <GeneralDetails values={values} updateFirstName={handleFirstNameChange} updateLastName={handleLastNameChange} updateEmail={handleEmailChange} updatePassword={handlePasswordChange} nextStep={nextStep }/>
            
            case 2:
                return <EducationDetails values={values} updateCollegeName={handleCollegeChange} updateYearPassedOut={handleYearPassedOutChange} nextStep={nextStep} prevStep={prevStep} />

            case 3:
                return <Review values={values} nextStep={nextStep} prevStep={prevStep} />
    
            default:
        } 
    }


    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    wishify form
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
            
            { renderSwitch() }

        </Box>
    );
    
}


export default UserForm;





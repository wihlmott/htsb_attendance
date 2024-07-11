import { Paper, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LockIcon from '@mui/icons-material/Lock';
import { colors } from "../../config";
import SubmitFormButton from '../Components/SubmitFormButton'
import { useReducer } from "react";
import { signupReducer, initialState, actionTypes} from './signupReducer'

const Login = () => {

   const [formState, dispatch] = useReducer(signupReducer, initialState)

    const handleFirstNameChange = (e) => dispatch({type: actionTypes.UPDATE_FIRSTNAME, payload:e.target.value});
    const handleLastNameChange = (e) => dispatch({type: actionTypes.UPDATE_LASTNAME, payload:e.target.value});
    const handleEmailChange = (e) => dispatch({type: actionTypes.UPDATE_EMAIL, payload:e.target.value});
    const handlePasswordChange = (e) => dispatch({type: actionTypes.UPDATE_PASSWORD, payload:e.target.value});

    const newUserSigin = () => {
        const formValid = formState.firstName.isValid&&formState.lastName.isValid&&formState.email.isValid&&formState.password.isValid;

        if(formValid)console.log(formState+`set up new user`)
        else console.log(`hangle error on form`)
    }

    return <>
    <Grid2 container direction={'row'} alignItems={'center'} sx={{marginTop:4}}>
        <Grid2 item='true' xs={1} md={3}></Grid2>
        <Grid2 item='true' xs={10} md={6}>
        <Paper sx={{p:3}}>
            <LockIcon sx={styles.lockIcon}/>
            <Typography sx={styles.cardText}>Sign up</Typography>

            <TextField required sx={{width:'48%', display:'inline-block', mr:1}}
                placeholder="First Name*" 
                onChange={handleFirstNameChange}/>
            <TextField required sx={{width:'48%', display:'inline-block'}}
                placeholder="Last Name*"
                onChange={handleLastNameChange}/>
            <TextField required sx={{width:'99%', mt:1}}
                placeholder="Email*"
                onChange={handleEmailChange}/>
            <TextField required sx={{width:'99%', mt:1}}
                placeholder="Password*"
                onChange={handlePasswordChange}/>

            <SubmitFormButton text={'Sign Up'} width={'99%'} onClick={newUserSigin}/>
        </Paper>
        </Grid2>
        <Grid2 item='true' xs={1} md={3}></Grid2>
    </Grid2>
    </>
}

const styles = {
    lockIcon: {display:'flex',margin:'auto', mb:2, backgroundColor:colors.red(0.4), padding:1.5, borderRadius:'50%'},
    cardText: {textAlign:'center', fontSize:'1.2rem'},
}

export default Login;
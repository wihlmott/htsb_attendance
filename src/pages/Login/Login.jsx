import { Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LockIcon from '@mui/icons-material/Lock';
import { colors } from "../../config";

const Login = () => {
    return <>
    <Grid2 container direction={'row'} alignItems={'center'} sx={{marginTop:4}}>
        <Grid2 item='true' xs={2} md={4}></Grid2>
        <Grid2 item='true' xs={8} md={4}>
        <Paper >
            <LockIcon sx={styles.lockIcon}/>
            <Typography sx={styles.cardText}>Sign up</Typography>
        </Paper>
        </Grid2>
        <Grid2 item='true' xs={2} md={4}></Grid2>
    </Grid2>
    </>
}

const styles = {
    lockIcon: {display:'flex',margin:'auto', mb:2, backgroundColor:colors.red(0.4), padding:1.5, borderRadius:'50%'},
    cardText: {textAlign:'center', fontSize:'1.2rem'},
}

export default Login;
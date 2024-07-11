import { Button } from "@mui/material";
import { colors } from "../../config";

const SubmitFormButton = ({text='Submit', width='auto', onClick}) => {

  return (
    <Button variant="contained" sx={{backgroundColor:colors.red(0.95), width:width, marginTop:'5px'}} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SubmitFormButton;

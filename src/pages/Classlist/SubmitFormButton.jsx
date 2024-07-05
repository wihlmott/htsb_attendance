import { Button } from "@mui/material";
import { colors } from "../../config";

const SubmitFormButton = () => {
  const submitHandler = () => {
    console.log(`button itself doesn't do anything yet`);
  };

  return (
    <Button variant="contained" onClick={submitHandler} sx={{backgroundColor:colors.red(0.95)}}>
      Submit
    </Button>
  );
};

export default SubmitFormButton;

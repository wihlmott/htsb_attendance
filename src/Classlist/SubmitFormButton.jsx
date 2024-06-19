import { Button } from "@mui/material";

const SubmitFormButton = () => {
  const submitHandler = () => {
    console.log(`print attendance data`); //needs to get state of who is present
  };

  return (
    <Button variant="contained" onClick={submitHandler}>
      Submit
    </Button>
  );
};

export default SubmitFormButton;

import { Button } from "@mui/material";

const SubmitFormButton = () => {
  const submitHandler = () => {
    console.log(`button itself doesn't do anything yet`);
  };

  return (
    <Button variant="contained" onClick={submitHandler}>
      Submit
    </Button>
  );
};

export default SubmitFormButton;

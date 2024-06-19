import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ListItem from "./ListItem";
import SubmitFormButton from "./SubmitFormButton";

const buttonsText = [
  { type: "Absent", value: "A", checked: false },
  { type: "Excuse", value: "E", checked: false },
  { type: "Late", value: "L", checked: false },
  { type: "LateExcuse", value: "LE", checked: false },
  { type: "Present", value: "P", checked: false },
];

const Classlist = ({ names }) => {
  const buttonClickHandler = (e) => {
    console.log(e.target.innerHTML);
  };

  return (
    <>
      <Grid2 container>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
        <Grid2 item="true" xs={11.2} md={8} sx={styles.banner}>
          {buttonsText.map((el) => {
            return (
              <Typography
                key={el.value}
                sx={styles.buttons}
                onClick={buttonClickHandler}
              >
                {el.value}
              </Typography>
            );
          })}
          <br />
          {names.map((el, i) => {
            return (
              <ListItem
                key={el.adminNo}
                learnerCard={el}
                buttonsText={buttonsText}
                i={i}
              />
            );
          })}
        </Grid2>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
        <Grid2 item="true" xs={11.2} md={8}>
          <SubmitFormButton />
        </Grid2>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
      </Grid2>
    </>
  );
};

const styles = {
  banner: {
    marginTop: "44px",
    height: "70vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  buttons: {
    position: "relative",
    float: "right",
    fontSize: "0.8rem",
    marginRight: "1.6rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Classlist;

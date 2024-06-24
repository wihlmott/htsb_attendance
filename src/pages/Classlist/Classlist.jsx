import ListItem from "./ListItem";
import SubmitFormButton from "./SubmitFormButton";
import Layout from "../Components/Layout";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const buttonsText = [
  { type: "Absent", value: "A", checked: false },
  { type: "Excuse", value: "E", checked: false },
  { type: "Late", value: "L", checked: false },
  { type: "LateExcuse", value: "LE", checked: false },
  { type: "Present", value: "P", checked: false },
];

const Classlist = ({ names }) => {
  const navigate = useNavigate();
  const params = useParams(); //use params to fetch correct data // remove props from component

  console.log(params);

  const [attendanceState, setAttendanceState] = useState([]);

  const buttonClickHandler = (e) => {
    console.log(e.target.innerHTML);
  };

  const sendSelection = (e) =>
    setAttendanceState((prev) => {
      return [e, ...prev?.filter((el) => el.learner !== e.learner)];
    });

  const submitClasslist = () => {
    console.log(attendanceState);
    navigate("/");
  };

  return (
    <>
      <div style={{ marginTop: "50px", marginBottom: "-40px" }}>
        <Typography sx={styles.title}>
          {`${params.grade} - ${params.subject} - 
          ${params.teacherCode}${params.class}`}
        </Typography>
      </div>
      <Layout
        children={
          <>
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
                  sendSelection={sendSelection}
                />
              );
            })}
          </>
        }
      />

      <Grid2 container>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
        <Grid2 item="true" xs={11.2} md={8}>
          <div onClick={submitClasslist}>
            <SubmitFormButton />
          </div>
        </Grid2>
        <Grid2 item="true" xs={0.4} md={2}></Grid2>
      </Grid2>
    </>
  );
};

const styles = {
  buttons: {
    position: "relative",
    float: "right",
    fontSize: "0.8rem",
    marginRight: "1.6rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  title: {
    textTransform: "capitalize",
    marginLeft: 2,
    paddingBottom: 1,
    textShadow: "1px 2px 3px rgba(0,0,0,0.2)",
  },
};

export default Classlist;

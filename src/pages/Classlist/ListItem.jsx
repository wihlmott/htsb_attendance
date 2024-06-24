import { Paper, Radio, Typography } from "@mui/material";
import { useState } from "react";

const ListItem = ({ learnerCard, buttonsText, i, sendSelection }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const selectRadioHandler = (e) => {
    setSelectedValue(e.target.value);
    sendSelection({ learner: learnerCard.adminNo, value: e.target.value });
  };

  return (
    <Paper
      key={i}
      elevation={2}
      sx={i % 2 ? styles.nameElement : styles.nameElementOdd}
    >
      <Typography sx={styles.adminNo}>{learnerCard.adminNo}</Typography>
      <Typography
        sx={{ display: "inline-block" }}
      >{`${learnerCard.firstname} ${learnerCard.lastname}`}</Typography>
      {buttonsText.map((el) => {
        return (
          <Radio
            key={el.value}
            size="small"
            sx={styles.radio}
            value={el.value}
            checked={selectedValue === el.value}
            onChange={selectRadioHandler}
          />
        );
      })}
    </Paper>
  );
};

const styles = {
  radio: { position: "relative", float: "right", marginTop: -2 },
  adminNo: { fontSize: "0.7rem", color: "rgba(0,0,0,0.65)" },
  nameElementOdd: {
    textTransform: "capitalize",
    p: 1,
    borderRadius: 0,
    backgroundColor: "rgba(189,195,199,0.8)",
    textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
  },
  nameElement: {
    textTransform: "capitalize",
    p: 1,
    borderRadius: 0,
    backgroundColor: "transparent",
    textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
  },
};

export default ListItem;

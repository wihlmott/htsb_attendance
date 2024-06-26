import { Paper, Radio, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../config";

const ListItem = ({ learnerCard, buttonsText, i }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const selectRadioHandler = (e) => setSelectedValue(e.target.value);

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
    backgroundColor: colors.blueGrey(0),
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

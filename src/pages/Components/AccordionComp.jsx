import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AccordionComp = ({ arr }) => {
  const [tab, setTab] = useState(arr[0]);

  return arr.map((el) => {
    return (
      <Accordion
        key={el}
        onClick={(e) => setTab(tab === el ? false : e.target.textContent)}
        expanded={tab === el}
      >
        <AccordionSummary>
          {
            <Typography sx={tab === el ? styles.open : styles.close}>
              {el}
            </Typography>
          }
        </AccordionSummary>
        <AccordionDetails>stuff</AccordionDetails>
      </Accordion>
    );
  });
};

const styles = {
  open: {
    textTransform: "capitalize",
    textShadow: "1px 1px 7px rgba(0,0,0,0.3)",
  },
  close: {
    fontSize: "small",
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.6)",
  },
};

export default AccordionComp;

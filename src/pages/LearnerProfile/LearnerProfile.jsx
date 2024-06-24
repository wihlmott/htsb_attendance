import Layout from "../../Layout.jsx";
import InfoCard from "./InfoCard/InfoCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const learnerProfileTabs = ["attendance", "home work", "assessments"];

const names = [
  { adminNo: "100-24", firstname: "John", lastname: "Smith" },
  { adminNo: "101-24", firstname: "First", lastname: "last" },
  { adminNo: "102-24", firstname: "Peter", lastname: "Something" },
  { adminNo: "103-24", firstname: "Again", lastname: "Random" },
];

const LearnerProfile = () => {
  const [tab, setTab] = useState("attendance");

  return (
    <>
      <Grid2 container>
        <Grid2 item="true" xs={12} md={2}>
          <InfoCard adminNo={names[0].adminNo} />
        </Grid2>
        <Grid2 item="true" xs={12} md={10}>
          <Layout
            children={
              <>
                {learnerProfileTabs.map((el) => {
                  return (
                    <Accordion
                      key={el}
                      onClick={(e) =>
                        setTab(tab === el ? false : e.target.textContent)
                      }
                      expanded={tab === el}
                    >
                      <AccordionSummary>
                        {
                          <Typography
                            sx={tab === el ? styles.open : styles.close}
                          >
                            {el}
                          </Typography>
                        }
                      </AccordionSummary>
                      <AccordionDetails>stuff</AccordionDetails>
                    </Accordion>
                  );
                })}
              </>
            }
            size={0.5}
          />
        </Grid2>
      </Grid2>
    </>
  );
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

export default LearnerProfile;

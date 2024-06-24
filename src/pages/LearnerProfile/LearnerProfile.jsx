import Layout from "../Components/Layout";
import AccordionComp from "../Components/AccordionComp";
import InfoCard from "./InfoCard/InfoCard";
import { learnerProfileTabs } from "../../config.jsx";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const names = [
  { adminNo: "100-24", firstname: "John", lastname: "Smith" },
  { adminNo: "101-24", firstname: "First", lastname: "last" },
  { adminNo: "102-24", firstname: "Peter", lastname: "Something" },
  { adminNo: "103-24", firstname: "Again", lastname: "Random" },
];

const LearnerProfile = () => {
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
                <AccordionComp arr={learnerProfileTabs} />
              </>
            }
            size={0.5}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default LearnerProfile;

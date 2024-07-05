import Layout from "../Components/Layout";
import AccordionComp from "../Components/AccordionComp";
import InfoCard from "./InfoCard/InfoCard";
import { learnerProfileTabs } from "../../config.jsx";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const LearnerProfile = ({adminNo}) => {
  return (
    <>
        <Grid2 item="true" xs={12} md={2}>
          <InfoCard adminNo={adminNo} />
        </Grid2>
        <Grid2 item="true" xs={12} md={10}>
          <Layout
            children={
              <>
                <AccordionComp arr={learnerProfileTabs} />{/*make dynamic, needs to be populated based on learner selected*/}
              </>
            }
            size={0.5}
          />
        </Grid2>
    </>
  );
};

export default LearnerProfile;

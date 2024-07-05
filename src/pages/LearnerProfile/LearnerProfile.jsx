import LearnerInfo from './LearnerInfo.jsx'
import SearchBar from "../../TopBar/SearchBar.jsx";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from 'react';

const names = [
  { adminNo: "100-24", firstname: "John", lastname: "Smith" },
  { adminNo: "101-24", firstname: "First", lastname: "last" },
  { adminNo: "102-24", firstname: "Peter", lastname: "Something" },
  { adminNo: "103-24", firstname: "Again", lastname: "Random" },
];

const LearnerProfile = () => {
  const [learner, setLearner] = useState(false);

  const sendSearch = e => {
    setLearner(e);
    console.log(`searching from learnerProfile page... for ... ${e}`)
  }//this must set learner //also provide loading icon during search

  return (
    <>
        <Grid2 item='true' xs={10} md={6}>
          <SearchBar width={window.innerWidth<'400'?'92vw':'30vw'} marginTop='25px' sendSearch={sendSearch}/>
        </Grid2>
        <br/>
        <br/>
        <br/>
      <Grid2 container>
        {learner && <LearnerInfo adminNo={names[0].adminNo}/> /*send in learner info */} 
      </Grid2>
    </>
  );
};

export default LearnerProfile;

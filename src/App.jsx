import { useState } from "react";
import TopBar from "./TopBar/TopBar";
import FileBanner from "./FileBanner/FileBanner";
import Classlist from "./Classlist/Classlist";

const files = [
  { grade: "grade 9", subject: "mathematics" },
  { grade: "grade 10", subject: "technical mathematics" },
  { grade: "grade 11", subject: "science" },
];

const names = [
  { adminNo: "100-24", firstname: "John", lastname: "Smith" },
  { adminNo: "101-24", firstname: "First", lastname: "last" },
  { adminNo: "102-24", firstname: "Peter", lastname: "Something" },
  { adminNo: "103-24", firstname: "Again", lastname: "Random" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      {/* <FileBanner files={files} /> */}
      {/* <Classlist names={names} /> */}
    </>
  );
}

export default App;

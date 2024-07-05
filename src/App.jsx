import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LearnerProfile from "./pages/LearnerProfile/LearnerProfile";
import FileBanner from "./pages/FileBanner/FileBanner";
import Classlist from "./pages/Classlist/Classlist";
import TopBar from "./TopBar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const files = [
  { grade: "grade 9", subject: "mathematics", teacherCode: "VL", class: "1" },
  {
    grade: "grade 10",
    subject: "technical mathematics",
    teacherCode: "AB",
    class: "2",
  },
  { grade: "grade 11", subject: "science", teacherCode: "LR", class: "1" },
];

const names = [
  { adminNo: "100-24", firstname: "John", lastname: "Smith" },
  { adminNo: "101-24", firstname: "First", lastname: "last" },
  { adminNo: "102-24", firstname: "Peter", lastname: "Something" },
  { adminNo: "103-24", firstname: "Again", lastname: "Random" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBar />,
    children: [
      { path: "/", element: <Login/> },
      { path: "/home", element: <Home /> },//initial page after sign in
      { path: "/learnerprofile", element: <LearnerProfile /> }, // search for learners, only available for teachers
      { path: "/classes", element: <FileBanner files={files} /> }, //needs to be dynampic, this page after landing page, set from signin data
      {
        path: "/files/:grade/:subject/:teacherCode/:class",
        element: <Classlist names={names} />,
      },
    ],
  },//create different routing options based on - no user signed in, teacher signed in, learner signed in.
  ,
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;

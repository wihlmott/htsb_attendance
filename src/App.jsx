import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LearnerProfile from "./pages/LearnerProfile/LearnerProfile";
import FileBanner from "./pages/FileBanner/FileBanner";
import Classlist from "./pages/Classlist/Classlist";
import TopBar from "./TopBar/TopBar";
import Home from "./pages/Home/Home";
import { allClasses, allStudents } from "./config";

const files = allClasses;
const names = allStudents;

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/learnerprofile", element: <LearnerProfile /> }, //initial page if learner signs in
      { path: "/classes", element: <FileBanner files={files} /> }, //needs to be dynampic, this page after landing page, set from signin data
      {
        path: "/files/:grade/:subject/:teacherCode/:class",
        element: <Classlist names={names} />,
      },
    ],
  },
  ,
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;

import Layout from "../Components/Layout";
import { homeTabs } from "../../config";
import AccordionComp from "../Components/AccordionComp";

const Home = () => {
  return (
    <Layout
      children={
        <>
          <AccordionComp arr={homeTabs} />
        </>
      }
    />
  );
};

export default Home;

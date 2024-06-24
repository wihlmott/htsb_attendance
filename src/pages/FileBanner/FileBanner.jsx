import { Card, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

const FileBanner = ({ files }) => {
  return (
    <>
      <Layout
        children={files.map((el) => {
          return (
            <Link
              key={el.subject}
              style={styles.link}
              to={`/files/${el.grade.replace(" ", "")}/${el.subject}/${
                el.teacherCode
              }/${el.class}`}
            >
              <Card sx={styles.subjectCard}>
                <Typography variant="body1" sx={styles.text}>
                  {el.grade}
                </Typography>
                <Typography variant="subtitle2" sx={styles.subtitleText}>
                  {`${el.subject} - 
                  ${el.teacherCode}`}
                </Typography>
              </Card>
            </Link>
          );
        })}
      />
    </>
  );
};

const styles = {
  subjectCard: { p: 2.5, m: 1 },
  text: { textTransform: "capitalize" },
  subtitleText: {
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.4)",
    textShadow: "1px 2px 3px rgba(0,0,0,0.2)",
  },
  link: { textDecoration: "none" },
};

export default FileBanner;

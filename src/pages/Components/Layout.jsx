import { Card, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { allTeachers } from "../../config";

const FileBanner = ({ files }) => {
  const displayClasses = (teacherCode) => files.filter((classes)=>classes.teacherCode==teacherCode);

  const showFiles = displayClasses(allTeachers[0].teacherCode);

  return (
    <>
      <Layout
        children={showFiles.map((el) => {
          return (
            <Link
              key={el.subject+el.grade}
              style={styles.link}
              to={`/files/${el.grade.replace(" ", "")}/${el.subject}/${
                el.teacherCode
              }/${el.class}`}
            >
              <Card sx={styles.subjectCard}>
                <Typography variant="body1" sx={styles.text}>
                  Grade {el.grade}{el.registerCl}
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
  banner: {
    marginTop: "20px",
    height: "70vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow:'scroll'
  },
  link: { textDecoration: "none" },
};

export default FileBanner;
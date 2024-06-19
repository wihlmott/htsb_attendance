import { Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const FileBanner = ({ files }) => {
  return (
    <Grid2 container>
      <Grid2 item="true" xs={0.4} md={2}></Grid2>
      <Grid2 item="true" xs={11.2} md={8} sx={styles.banner}>
        {files.map((el) => {
          return (
            <Card
              key={el.subject}
              sx={styles.subjectCard}
              onClick={() => {
                console.log(el);
              }}
            >
              <Typography variant="body1" sx={styles.text}>
                {el.grade}
              </Typography>
              <Typography variant="subtitle2" sx={styles.subtitleText}>
                {el.subject}
              </Typography>
            </Card>
          );
        })}
      </Grid2>
      <Grid2 item="true" xs={0.4} md={2}></Grid2>
    </Grid2>
  );
};

const styles = {
  banner: {
    marginTop: "44px",
    height: "70vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  subjectCard: { p: 2.5, m: 1 },
  text: { textTransform: "capitalize" },
  subtitleText: {
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.4)",
    textShadow: "1px 2px 3px rgba(0,0,0,0.2)",
  },
};

export default FileBanner;

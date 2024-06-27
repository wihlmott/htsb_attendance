import { Card, Typography } from "@mui/material";

const dummy = {
  adminNo: "100-24",
  firstname: "John",
  lastname: "Smith",
  grade: "10E2",
};

const InfoCard = ({ adminNo }) => {
  return (
    <Card sx={styles.card}>
      <div
        style={{
          float: "left",
          position: "relative",
        }}
      >
        <Typography sx={styles.titles}>Admin No:</Typography>
        <Typography sx={{ display: "inline" }}>{adminNo}</Typography>
        <br />
        <Typography sx={styles.titles}>Name:</Typography>
        <Typography
          sx={{ display: "inline" }}
        >{`${dummy.firstname} ${dummy.lastname}`}</Typography>
        <br />
        <Typography sx={styles.titles}>Grade:</Typography>
        <Typography sx={{ display: "inline" }}>{dummy.grade}</Typography>
      </div>
      <div
        style={{
          float: "right",
          position: "relative",
          border: "1px solid red",
          height: "70px",
          borderRadius: "50%",
          aspectRatio: 1,
          marginRight: "4px",
        }}
      >
        {/* image */}
      </div>
      <br />
    </Card>
  );
};

const styles = {
  titles: {
    fontWeight: "bold",
    display: "inline",
    fontSize: "small",
    textShadow: "1px 1px 1px rgba(0,0,0,0.2)",
    padding: 1,
  },
  card:{ mt: "20px", mb: -1 }
};

export default InfoCard;

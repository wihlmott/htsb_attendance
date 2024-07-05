import { Avatar, Card, Typography } from "@mui/material";

const dummy = {
  adminNo: "100-24",
  firstname: "John",
  lastname: "Smith",
  grade: "10E2",
};

const InfoCard = ({ adminNo }) => {
  const initials = dummy.firstname[0]+dummy.lastname[0];

  return (
    <Card sx={styles.card}>
      <div
        style={{
          float: "left",
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
      <Avatar sx={styles.avatar}>{initials}</Avatar>
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
  avatar:{float:'right', m:2},
  card:{ mt: "20px", mb: -1 }
};

export default InfoCard;

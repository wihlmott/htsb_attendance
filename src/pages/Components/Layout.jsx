import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Layout = ({ children, size = 2 }) => {
  return (
    <Grid2 container>
      <Grid2 item="true" xs={0.4} md={size}></Grid2>
      <Grid2 item="true" xs={11.2} md={8} sx={styles.banner}>
        {children}
      </Grid2>
      <Grid2 item="true" xs={0.4} md={size}></Grid2>
    </Grid2>
  );
};

const styles = {
  banner: {
    marginTop: "20px",
    height: "70vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
};

export default Layout;

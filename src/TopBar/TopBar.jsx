import { AppBar, IconButton, InputBase, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchBar from "./SearchBar";

const menuClickedHandler = () => {
  console.log("menu clicked");
};

const TopBar = () => {
  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Grid2 container sx={{ width: "100%" }}>
        <Grid2 item="true" xs={6} md={9}>
          <IconButton onClick={menuClickedHandler}>
            <MenuIcon />
          </IconButton>
          <Typography sx={styles.text}>attendance</Typography>
        </Grid2>
        <Grid2 item="true" xs={5.5} md={2.85}>
          <SearchBar />
        </Grid2>
      </Grid2>
    </AppBar>
  );
};

const styles = {
  appBar: { height: "40px", display: "flex", justifyContent: "center" },
  text: { display: "inline" },
};

export default TopBar;

import { AppBar, IconButton, Paper, SwipeableDrawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrawList from "./DrawList";
import { colors } from "../config";

const TopBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuClickedHandler = () => setOpenMenu(!openMenu);

  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <SwipeableDrawer
          anchor="left"
          open={openMenu}
          onClick={menuClickedHandler}
          onClose={menuClickedHandler}
          onOpen={menuClickedHandler}
        >
          {<DrawList />}
        </SwipeableDrawer>
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
      <Paper sx={styles.pageName}>
        <Typography>retrieve current page</Typography>
      </Paper>
      <Outlet />
    </>
  );
};

const styles = {
  appBar: { height: "40px", display: "flex", justifyContent: "center", boxShadow:0, backgroundColor:colors.darkBlue(0.8)},
  text: { display: "inline" },
  link: { textDecoration: "none", color: "black", textTransform: "capitalize" },
  pageName: {boxSizing:'borderBox', m:-1, padding:3,marginTop:'35px', borderRadius:0, backgroundColor:"rgba(255,255,255)", boxShadow:'rgba(0, 0, 0, 0.5) 0px 1px 3px' }
};

export default TopBar;

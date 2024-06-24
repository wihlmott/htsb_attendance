import { AppBar, IconButton, SwipeableDrawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrawList from "./DrawList";

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
      <Outlet />
    </>
  );
};

const styles = {
  appBar: { height: "40px", display: "flex", justifyContent: "center" },
  text: { display: "inline" },
  link: { textDecoration: "none", color: "black", textTransform: "capitalize" },
};

export default TopBar;

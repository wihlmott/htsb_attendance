import { AppBar, IconButton, Paper, SwipeableDrawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrawList from "./DrawList";
import { colors } from "../config";

const TopBar = () => {
  const [page, setPage] = useState('home')
  const [openMenu, setOpenMenu] = useState(false);

  const menuClickedHandler = () => setOpenMenu(!openMenu);

  const sendPage = (e) => setPage(e);
  const sendSearch = (e) => {console.log(`searching from topBar... for... + ${e}`)}

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
          {<DrawList sendPage={sendPage} />}
        </SwipeableDrawer>
        <Grid2 container sx={{ width: "100%" }}>
          <Grid2 item="true" xs={6} md={9}>
            <IconButton onClick={menuClickedHandler}>
              <MenuIcon />
            </IconButton>{/*hide functionality if no user is signed in*/}
            <Typography sx={styles.text}>student portal</Typography>
          </Grid2>
          <Grid2 item="true" xs={5.5} md={2.85}>
            <SearchBar sendSearch={sendSearch}/>
          </Grid2>
        </Grid2>
      </AppBar>
      <Paper sx={styles.pageNameBanner}>
        <Typography sx={styles.pageNameText}>{page==='logout'?'login to use the portal':page}</Typography>
      </Paper>
      <Outlet />
    </>
  );
};

const styles = {
  appBar: { height: "40px", display: "flex", justifyContent: "center", boxShadow:0, backgroundColor:colors.red(0.95)},
  text: { display: "inline", textTransform: "capitalize" },
  link: { textDecoration: "none", color: "black", textTransform: "capitalize" },
  pageNameBanner: {boxSizing:'borderBox', m:-1, padding:3,marginTop:'35px', borderRadius:0, backgroundColor:"rgba(255,255,255)", boxShadow:'rgba(0, 0, 0, 0.5) 0px 1px 3px' },
  pageNameText: {textTransform:'capitalize'}
};

export default TopBar;

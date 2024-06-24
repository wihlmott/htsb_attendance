import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import { drawListItems } from "../config";

const DrawList = () => {
  return (
    <Box sx={{ width: 180 }} role="presentation">
      <List>
        {drawListItems.map((el) => {
          return (
            <NavLink
              key={el}
              to={el === "home" ? "/" : `/${el.replace(" ", "")}`}
              style={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
              end
            >
              <ListItem>
                <ListItemButton>
                  <ListItemText>{el}</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "black",
    textTransform: "capitalize",
  },
  linkActive: {
    textDecoration: "none",
    color: "rgba(0,0,0,0.6)",
    textTransform: "capitalize",
  },
};

export default DrawList;

import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useStyles } from "../StyleSheet/DashboardStyles";

export default function DashboardMenu({ handleDrawerToggle }) {
  const { sidebarBox, sidebarBoxMenuItem } = useStyles();
  let { url } = useRouteMatch();

  return (
    <List
      onClink={handleDrawerToggle}
      sx={{ paddingLeft: "20px", }}
      className={sidebarBox}
    >
      <NavLink to={`${url}`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Home" />
        </ListItem>
      </NavLink>
      <NavLink to={`${url}/CreateWork`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Create Work" />
        </ListItem>
      </NavLink>
      <NavLink to={`${url}/ManageWork`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Manage Work" />
        </ListItem>
      </NavLink>
      <NavLink to={`${url}/Workers`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Workers" />
        </ListItem>
      </NavLink>
      <NavLink to={`${url}/completeWork`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Complete Work" />
        </ListItem>
      </NavLink>
      <NavLink to={`${url}/createAdmin`}>
        <ListItem button className={sidebarBoxMenuItem}>
          <ListItemText primary="Create Work" />
        </ListItem>
      </NavLink>
    </List>
  );
}

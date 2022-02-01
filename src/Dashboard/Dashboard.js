import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { useStyles } from "../StyleSheet/DashboardStyles";
import DashboardMenu from "./DashboardMenu";
import CompleteWork from "./Pages/CompleteWork";
import CreateWork from "./Pages/CreateWork";
import Home from "./Pages/Home";
import ManageWork from "./Pages/ManageWork";
import Workers from "./Pages/Workers";

const drawerWidth = 240;
export default function Dashboard(props) {
  const { topHeader, headerHomeButton } = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path } = useRouteMatch();

  const drawer = (
    <div style={{ background: "#49d893" }}>
      <Box variant="contained" textAlign="center" sx={{ py: "0.8rem" }}>
        <Link to="/home">
          <Button className={headerHomeButton} variant="contained">
            Home
          </Button>
        </Link>
      </Box>
      <Divider />
      <DashboardMenu />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={topHeader}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Route exact path={`${path}`}>
            <Home />
          </Route>
          <Route exact path={`${path}/CreateWork`}>
            <CreateWork />
          </Route>
          <Route exact path={`${path}/ManageWork`}>
            <ManageWork />
          </Route>
          <Route exact path={`${path}/Workers`}>
            <Workers />
          </Route>
          <Route exact path={`${path}/completeWork`}>
            <CompleteWork />
          </Route>
        </Box>
      </Box>
    </Box>
  );
}
Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

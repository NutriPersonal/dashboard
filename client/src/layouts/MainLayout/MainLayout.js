import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Drawer from "./components/Drawer";
import AppBar from "./components/AppBar";

const drawerWidth = 540;

const MainLayout = () => (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar drawerWidth={drawerWidth} />
    <Drawer drawerWidth={drawerWidth} />
    <Box component="main" sx={{ px: 4, pt: "64px" }}>
      <Outlet />
    </Box>
  </Box>
);

export default MainLayout;

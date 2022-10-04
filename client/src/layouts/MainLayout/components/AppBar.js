import { AppBar as MuiAppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { assetLogotypeWhite } from "../../../assets";

const drawerWidth = 240;

const AppBar = () => (
  <MuiAppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
  >
    <Toolbar>
      <img height="20px" src={assetLogotypeWhite} alt="" />
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;

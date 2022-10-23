import {
  AppBar as MuiAppBar,
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { assetLogotypeWhite } from "../../../app_assets";
import LogoutIcon from "@mui/icons-material/Logout";
import GoogleSignInService from "../../../services/google_sign_service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = () => {
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const signOut = async () => {
    setShowBackdrop(true);
    const googleSignInService = new GoogleSignInService();

    const success = await googleSignInService.signOut();

    if (success) {
      navigate("/entrar");
    } else {
      setShowBackdrop(false);
      setShowSnackbar(true);
    }
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Snackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        message="Ocorreu um erro. Tente novamente mais tarde."
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img height="20px" src={assetLogotypeWhite} alt="" />
        <Button
          onClick={signOut}
          color="secondary"
          startIcon={<LogoutIcon />}
          variant="text"
        >
          Sair
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

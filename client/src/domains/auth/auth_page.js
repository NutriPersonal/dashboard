import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { assetLogomarkWhite } from "../../app_assets";
import AppColors from "../../app_colors";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleSignInService from "./services/google_sign_service";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SideContainer = ({ children, backgroundColor }) => {
  return (
    <Box
      children={children}
      sx={{
        display: "flex",
        width: "50%",
        height: "100vh",
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    />
  );
};

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showSnackbar, setShowSnackbar] = useState(false);

  const signIn = async () => {
    const googleSignInService = new GoogleSignInService();
    const success = await googleSignInService.signIn();

    if (success) {
      navigate("/dashboard");
    } else {
      setShowSnackbar(true);
    }
  };

  const buttonLabel = (location.pathname = "/entrar"
    ? "Entrar com Google"
    : "Cadastrar-se com Google");

  return (
    <Box>
      <Snackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        severity="success"
        message="Ocorreu um erro. Tente novamente mais tarde."
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Box sx={{ display: "flex", width: 1, height: "100%" }}>
        <SideContainer
          backgroundColor={AppColors.primary}
          sx={{ boxShadow: 1 }}
        >
          <img width="180px" src={assetLogomarkWhite} alt="" />
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              textAlign: "center",
              fontWeight: "medium",
              color: AppColors.pLighter,
            }}
          >
            Para uma vida longa e<br />
            saudável
          </Typography>
        </SideContainer>
        <SideContainer backgroundColor={"whitesmoke"}>
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              fontFamily: "Courgette",
              textAlign: "center",
              fontWeight: "medium",
              fontSize: "5em",
              color: AppColors.pDark,
            }}
          >
            Entrar
          </Typography>
          <Button
            onClick={signIn}
            variant="contained"
            sx={{ mt: 5, color: "whitesmoke" }}
            startIcon={<GoogleIcon />}
          >
            {buttonLabel}
          </Button>
        </SideContainer>
      </Box>
    </Box>
  );
};

export default AuthPage;

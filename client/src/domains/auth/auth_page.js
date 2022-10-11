import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import {
  assetLogomark,
  assetLogomarkWhite,
  assetLogotypeWhite,
} from "../../app_assets";
import AppColors from "../../app_colors";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

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

  const buttonLabel = (location.pathname = "/entrar"
    ? "Entrar com Google"
    : "Cadastrar-se com Google");

  return (
    <Box sx={{ display: "flex", width: 1, height: "100%" }}>
      <SideContainer backgroundColor={AppColors.primary} sx={{ boxShadow: 1 }}>
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
          variant="contained"
          sx={{ mt: 5, color: "whitesmoke" }}
          startIcon={<GoogleIcon />}
        >
          {buttonLabel}
        </Button>
      </SideContainer>
    </Box>
  );
};

export default AuthPage;

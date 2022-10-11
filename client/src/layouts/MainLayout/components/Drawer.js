import { Avatar, Box, Drawer as MuiDrawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import Groups2Icon from "@mui/icons-material/Groups2";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { demoUserPhoto } from "../../../app_assets";
import { useNavigate } from "react-router-dom";
import { Login, PersonAdd } from "@mui/icons-material";
import AuthService from "../../../services/auth_service";

const drawerWidth = 240;

const Drawer = () => {
  const navigate = useNavigate();
  const itemsList = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => navigate("/dashboard"),
    },
    {
      label: "Nutricionistas",
      icon: <GroupsIcon />,
      onClick: () => navigate("/nutricionistas"),
    },
    {
      label: "Adicionar nutricionista",
      icon: <GroupAddIcon />,
      onClick: () => navigate("/nutricionistas/adicionar"),
    },
    {
      label: "Usuários",
      icon: <Groups2Icon />,
      onClick: () => navigate("/usuarios"),
    },
    {
      label: "Adicionar usuário",
      icon: <GroupAddIcon />,
      onClick: () => navigate("/usuarios/adicionar"),
    },
    {
      label: "Entrar",
      icon: <Login />,
      onClick: () => navigate("/entrar"),
    },
    {
      label: "Registrar",
      icon: <PersonAdd />,
      onClick: () => navigate("/registrar"),
    },
  ];

  const authService = new AuthService();
  const currentUserName = authService.getCurrentUserName();
  const currentUserPhotoUrl = authService.getCurrentUserPhotoUrl();

  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{ my: 5, justifyContent: "center", flexDirection: "column" }}
      >
        <Avatar
          alt={currentUserName}
          src={currentUserPhotoUrl}
          sx={{ width: 120, height: 120 }}
        />
        <Box>
          <p>{currentUserName}</p>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {itemsList.map((item, index) => (
          <ListItem
            key={item.label}
            dense
            disablePadding
            onClick={item.onClick}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;

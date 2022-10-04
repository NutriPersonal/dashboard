import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardPage from "./domains/dashboard/dasbhboard_page";
import NotFoundPage from "./domains/not_found/not_found_page";
import SignInPage from "./domains/sign_in/sign_in_page";
import SignUpPage from "./domains/sign_up/sign_up_page";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UsersTablePage from "./domains/users/pages/users_table_page";
import UserCreateEditPage from "./domains/users/pages/user_create_edit_page";
import NutritionistTablePage from "./domains/nutritionists/pages/nutritionists_table_page";
import NutritionistCreateEditPage from "./domains/nutritionists/pages/nutritionist_create_edit_page";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2FC4B2",
    },
    secondary: {
      main: "#8DE5DB",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

function App() {
  // const [user, setUser] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/entrar"
            element={<ProtectedRoute page={<SignInPage />} />}
          />
          <Route
            path="/registrar"
            element={<ProtectedRoute page={<SignUpPage />} />}
          />
          <Route element={<MainLayout />}>
            <Route
              path="/dashboard"
              element={<ProtectedRoute page={<DashboardPage />} />}
            />
            <Route path="/nutricionistas">
              <Route
                index
                element={<ProtectedRoute page={<NutritionistTablePage />} />}
              />
              <Route
                path="editar/:id"
                element={
                  <ProtectedRoute page={<NutritionistCreateEditPage />} />
                }
              />
              <Route
                path="adicionar"
                element={
                  <ProtectedRoute page={<NutritionistCreateEditPage />} />
                }
              />
            </Route>
            <Route path="/usuarios">
              <Route index element={<UsersTablePage />} />
              <Route
                path="editar/:id"
                element={<ProtectedRoute page={<UserCreateEditPage />} />}
              />
              <Route
                path="adicionar"
                element={<ProtectedRoute page={<UserCreateEditPage />} />}
              />
            </Route>
          </Route>

          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

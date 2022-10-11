import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardPage from "./domains/dashboard/dasbhboard_page";
import NotFoundPage from "./domains/not_found/not_found_page";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UsersTablePage from "./domains/users/pages/users_table_page";
import UserCreateEditPage from "./domains/users/pages/user_create_edit_page";
import NutritionistTablePage from "./domains/nutritionists/pages/nutritionists_table_page";
import NutritionistCreateEditPage from "./domains/nutritionists/pages/nutritionist_create_edit_page";
import AuthPage from "./domains/auth/auth_page";

import initFirebase from "./config/firebase";
import AppColors from "./app_colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2FC4B2",
    },
    secondary: {
      main: AppColors.pLighter,
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/entrar"
            element={<ProtectedRoute page={<AuthPage />} />}
          />
          <Route
            path="/registrar"
            element={<ProtectedRoute page={<AuthPage />} />}
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
                path=":id/editar"
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
                path=":id/editar"
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

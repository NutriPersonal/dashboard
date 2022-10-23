import { Snackbar } from "@mui/material";
import { useState } from "react";

const AppSnackbar = ({ message }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <Snackbar
      message={message}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    ></Snackbar>
  );
};

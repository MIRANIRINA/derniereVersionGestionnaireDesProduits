import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Deconnexion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("utilisateur");
    dispatch(logout());
    navigate("/connexion");
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={handleLogout}
      sx={{ margin: 2 }}
    >
      Deconnexion
    </Button>
  );
};

export default Deconnexion;

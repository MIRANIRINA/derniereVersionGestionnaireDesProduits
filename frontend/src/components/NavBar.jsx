//
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/productSlice";
import SearchIcon from "@mui/icons-material/Search";
import Deconnexion from "../pages/Deconnexion";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQueryLocal] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchQueryLocal(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <h1 className="font-bold ">GESTIONNAIRE DES PRODUITS</h1>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Rechercher un produit…"
              value={searchQuery}
              onChange={handleSearchChange}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="top-0 absolute right-0">
            <Deconnexion />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

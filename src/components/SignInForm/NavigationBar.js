import React, { useEffect, useContext } from "react";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreIcon from "@mui/icons-material/MoreVert";
import SignInForm from "./SignInForm/SignInForm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import { JobPostingsContext } from "../App";

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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

export default function NavigationBar() {
  const contextProps = useContext(JobPostingsContext);
  const location = useLocation();

  useEffect(() => {
    const signedInUser = localStorage.getItem("username");
    if (signedInUser) {
      contextProps.setIsSignedIn(true);
    }
  });

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "theme.palette.primary.light" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Job Routing
              </Typography>
              <Search sx={{ width: { md: "340px" }, margin: { xs: 0 } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for job postings"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {contextProps.isSignedIn ? (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <AccountCircleIcon sx={{ fontSize: "3rem" }} />
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {localStorage.getItem("username")}
                    </Typography>
                  </Box>
                ) : (
                  ""
                )}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={() => {
                    contextProps.isSignedIn
                      ? contextProps.handleSignOut()
                      : contextProps.handleOpenSignIn();
                  }}
                  color="inherit"
                  state={{ background: location }}
                >
                  {contextProps.isSignedIn ? <LogoutIcon /> : <LoginIcon />}
                  <Typography sx={{ fontSize: "1.1rem", marginLeft: "8px" }}>
                    {contextProps.isSignedIn ? "Sign out" : "Sign in"}
                  </Typography>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {location.pathname === "/login" && <SignInForm />}
    </>
  );
}

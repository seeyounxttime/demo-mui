import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { JobPostingsContext } from "../../App";

const SignInForm = (props) => {
  const contextProps = useContext(JobPostingsContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "MinhTri",
    password: "123456",
  });

  // Handle Change input
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignIn = () => {
    if (formData.username && formData.password) {
      contextProps.setIsSignedIn(true);
      onDismiss();
      localStorage.setItem("username", formData.username);
    }
  };

  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <Dialog
      open={contextProps.openSignIn}
      onClose={onDismiss}
      sx={{
        height: "100vh",
        "& .MuiPaper-root": {
          margin: 0,
          borderRadius: "20px",
          width: {
            xs: "340px",
            sm: "400px",
            md: "440px",
          },
          height: "auto",
          boxShadow: "none",
        },
        "& .MuiDialogContent-root": {
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          padding: { xs: "16px 20px", sm: "24px 30px" },
        }}
      >
        <DialogActions
          sx={{ display: "flex", justifyContent: "flex-end", padding: 0 }}
        >
          <CloseIcon
            onClick={onDismiss}
            sx={{ width: "34px", height: "34px", cursor: "pointer" }}
          />
        </DialogActions>
        <DialogTitle
          sx={{
            "@media (min-width: 0)": {
              fontSize: "20px",
            },
            "@media (min-width: 600px)": {
              fontSize: "24px",
            },
            fontWeight: 600,
            textAlign: "center",
            padding: 0,
            marginBottom: "10px",
          }}
        >
          Signin
        </DialogTitle>

        {/* Input fields   */}
        <Stack spacing={3}>
          <Box>
            <Typography sx={{ color: "#000", margin: 0 }}>Username</Typography>
            <CustomInputField
              hiddenLabel
              name="username"
              variant="outlined"
              placeholder="Enter your username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Box>

          <Box>
            <Typography sx={{ color: "#000", margin: 0 }}>Password</Typography>
            <CustomInputField
              hiddenLabel
              name="password"
              variant="outlined"
              placeholder="Enter your password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>
        </Stack>

        <DialogActions sx={{ padding: 0 }}>
          <CustomButton variant="contained" onClick={handleSignIn}>
            Sign In
          </CustomButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default SignInForm;

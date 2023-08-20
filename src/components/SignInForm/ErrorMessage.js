import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorMessage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        paddingTop: "100px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.light",
      }}
    >
      <Typography
        sx={{ color: "#fff", fontSize: "30px", marginBottom: "30px" }}
      >
        There's nothing here!
      </Typography>
      <Button
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "warning.main",
          color: "#fff",
          padding: "8px 20px",
          fontSize: "18px",
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default ErrorMessage;

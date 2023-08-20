import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    boxShadow: "none",
  },
  lineHeight: "100%",
  width: "100%",
  marginTop: "18px",
  border: "none",
  color: "#ffffff",
  backgroundColor: theme.palette.error.main,
  fontSize: "22px",
  boxShadow: "none",
  paddingY: { xs: "10px", sm: "12px" },
  borderRadius: "10px",
  textTransform: "none",
  padding: "10px 0",
  [theme.breakpoints.up("sm")]: {
    padding: "12px 0",
  },
}));

export default CustomButton;

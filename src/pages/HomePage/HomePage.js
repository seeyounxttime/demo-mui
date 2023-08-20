import React from "react";
import { Box } from "@mui/material";
import NavigationBar from "../../components/NavigationBar";
import JobsSection from "../../components/JobsSection/JobsSection";

function HomePage(props) {
  // console.log(11, openSignIn);

  // const {
  //   openSignIn,
  //   setOpenSignIn,
  //   isSignedIn,
  //   setIsSignedIn,
  //   openJobDetails,
  //   setOpenJobDetails,
  // } = props;

  // const navigate = useNavigate();

  // const handleOpenSignIn = () => {
  //   navigate("/login");
  //   setOpenSignIn(true);
  // };

  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <NavigationBar
      // handleOpenSignIn={handleOpenSignIn}
      // openSignIn={openSignIn}
      // isSignedIn={isSignedIn}
      // setIsSignedIn={setIsSignedIn}
      />
      <JobsSection
      // openSignIn={openSignIn}
      // setIsSignedIn={setIsSignedIn}
      // handleOpenSignIn={handleOpenSignIn}
      // setOpenSignIn={setOpenSignIn}
      // openJobDetails={openJobDetails}
      // setOpenJobDetails={setOpenJobDetails}
      />

      {/* <Outlet /> */}
    </Box>
  );
}

export default HomePage;

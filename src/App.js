import React, { useState, createContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import JobDetails from "./components/JobDetails/JobDetails";
import SignInForm from "./components/SignInForm/SignInForm";
import ErrorMessage from "./components/ErrorMessage";
import HomePage from "./pages/HomePage/HomePage";

export const JobPostingsContext = createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;
  const [openSignIn, setOpenSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [openJobDetails, setOpenJobDetails] = useState(false);

  const handleOpenSignIn = () => {
    navigate("/login");
    setOpenSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    navigate("/");
    localStorage.removeItem("username");
  };

  return (
    <>
      <JobPostingsContext.Provider
        value={{
          openSignIn,
          setOpenSignIn,
          handleOpenSignIn,
          handleSignOut,
          isSignedIn,
          setIsSignedIn,
          openJobDetails,
          setOpenJobDetails,
        }}
      >
        <Routes location={background || location}>
          <Route
            path="/"
            element={
              <HomePage
              // openSignIn={openSignIn}
              // setOpenSignIn={setOpenSignIn}
              // isSignedIn={isSignedIn}
              // setIsSignedIn={setIsSignedIn}
              // openJobDetails={openJobDetails}
              // setOpenJobDetails={setOpenJobDetails}
              />
            }
          >
            <Route path="jobs/" element={<HomePage />}>
              <Route path=":jobId" element={<JobDetails />} />
            </Route>

            <Route path="login" element={<SignInForm />} />
          </Route>

          <Route path="/error" element={<ErrorMessage />} />
        </Routes>

        {/* Show the modal when a `backgroundLocation` is set */}
        {background && (
          <Routes>
            <Route
              path="jobs/:jobId"
              element={<JobDetails openJobDetails={openJobDetails} />}
            />
            <Route
              path="login"
              element={
                <SignInForm
                  openSignIn={openSignIn}
                  isSignedIn={isSignedIn}
                  setIsSignedIn={setIsSignedIn}
                />
              }
            />
          </Routes>
        )}
      </JobPostingsContext.Provider>
    </>
  );
}

export default App;

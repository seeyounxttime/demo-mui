import React, { useContext } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../../jobs.json";
import { JobPostingsContext } from "../../App";

function JobDetails() {
  const contextProps = useContext(JobPostingsContext);

  const navigate = useNavigate();

  let params = useParams();

  let specificJob = jobs.find((job) => job.id === params.jobId);

  let specificJobSkills = () => {
    if (specificJob.skills.length > 4) {
      return [...specificJob.skills.slice(0, 4)];
    } else {
      return [...specificJob.skills.slice(0)];
    }
  };

  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <CustomDialog open={contextProps.openJobDetails} onClose={onDismiss}>
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
            sx={{
              width: "34px",
              height: "34px",
              cursor: "pointer",
            }}
          />
        </DialogActions>

        <DialogTitle
          sx={{
            "@media (min-width: 0)": {
              fontSize: "18px",
            },
            "@media (min-width: 600px)": {
              fontSize: "24px",
            },
            fontWeight: 600,
            textAlign: "center",
            padding: 0,
            marginTop: "10px",
          }}
        >
          {specificJob.title}
        </DialogTitle>

        <Divider
          sx={{
            margin: { xs: "8px 0", sm: "8px 0 12px 0" },
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
        />

        <Typography
          sx={{
            marginBottom: { xs: "24px", sm: "32px" },
            fontSize: { xs: "16px", sm: "18px" },
          }}
        >
          {specificJob.description}
        </Typography>

        <JobDetailsSkills>
          <Typography className="skills-heading">Skills:</Typography>
          <Box className="skills-list">
            {specificJobSkills().map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </Box>
        </JobDetailsSkills>

        <Typography
          sx={{
            fontSize: { sm: "18px" },
            marginTop: { xs: "24px", sm: "32px" },
            textAlign: "center",
          }}
        >
          City: <Typography component="span">{specificJob.city}</Typography>
        </Typography>
      </DialogContent>
    </CustomDialog>
  );
}

const CustomDialog = styled(Dialog)(({ theme }) => ({
  height: "100vh",
  "& .MuiPaper-root": {
    color: "#fff",
    backgroundColor: theme.palette.primary.dark,
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
}));

const JobDetailsSkills = styled(Box)(({ theme }) => ({
  "& .skills-heading": {
    textAlign: "center",
    marginBottom: "8px",
  },
  "& .skills-list": {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginTop: "8px",
    "& .MuiChip-root": {
      backgroundColor: theme.palette.error.main,
      padding: "6px 12px",
      height: "26px",
      borderRadius: "20px",
    },
    "& .MuiChip-label": {
      color: "#fff",
      padding: 0,
      fontSize: "0.9rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .skills-heading": {
      fontSize: "18px",
    },
  },
}));

export default JobDetails;

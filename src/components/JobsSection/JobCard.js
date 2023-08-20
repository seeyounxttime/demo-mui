import React, { useContext } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation, Link } from "react-router-dom";
import { JobPostingsContext } from "../../App";

function JobCard({ job }) {
  const contextProps = useContext(JobPostingsContext);

  const location = useLocation();

  const limitedSkills = () => {
    if (job.skills.length > 4) {
      return [...job.skills.slice(0, 4)];
    } else {
      return [...job.skills.slice(0)];
    }
  };

  const handleOpenJobDetails = () => {
    if (!localStorage.getItem("username")) {
      contextProps.setOpenSignIn(true);
    } else {
      contextProps.setOpenJobDetails(true);
    }
  };

  return (
    <>
      <CustomJobCard>
        <CardContent sx={{ padding: 0 }}>
          <Typography variant="h5" className="job-title">
            {job.title}
          </Typography>
          <Divider />
          <SkillsContainer>
            {limitedSkills().map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </SkillsContainer>
          <Typography className="job-description">{job.description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            marginTop: "50px",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to={localStorage.getItem("username") ? `/jobs/${job.id}` : "/login"}
            onClick={handleOpenJobDetails}
            state={{ background: location }}
          >
            <JobButton>Learn More</JobButton>
          </Link>
        </CardActions>
      </CustomJobCard>
    </>
  );
}

const CustomJobCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: "20px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .MuiTypography-root": {
    color: "#fff",
  },

  "& .MuiDivider-root": {
    borderColor: "grey",
  },
  "& .job-title": {
    textAlign: "center",
    marginBottom: "8px",
  },
  "& .job-description": {
    lineHeight: 1.5,
    marginTop: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "49.5%",
  },
  [theme.breakpoints.up("md")]: {
    width: "33%",
  },
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
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
}));

const JobButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  "&:hover": {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default JobCard;

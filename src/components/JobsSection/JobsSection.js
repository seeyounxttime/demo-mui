import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import JobCard from "./JobCard";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import jobs from "../../jobs.json";

function newListOfPages(jobs, itemsPerPage) {
  let newList = [];
  for (let i = 0; i < Math.ceil(jobs.length / itemsPerPage); i++) {
    newList.push({
      page: i + 1,
      fromIndex: i * itemsPerPage,
      toIndex: i * itemsPerPage + itemsPerPage,
    });
  }

  return newList;
}

function JobsSection() {
  const itemsPerPage = 5;
  const noOfPages = Math.ceil(jobs.length / itemsPerPage);
  const [listOfPages, setListOfPages] = useState(new Array(noOfPages));

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const queryPage = parseInt(query.get("page"));

  const [page, setPage] = useState(1);

  const [jobPostings, setJobPostings] = useState([
    ...jobs.slice(0, itemsPerPage),
  ]);

  const handleChange = (e, value) => {
    setPage(value);
    navigate(`/jobs?page=${value}`);

    for (let i = 0; i < listOfPages.length; i++) {
      if (value === listOfPages[i].page) {
        setJobPostings([
          ...jobs.slice(listOfPages[i].fromIndex, listOfPages[i].toIndex),
        ]);
      }
    }
  };

  useEffect(() => {
    setListOfPages([...newListOfPages(jobs, itemsPerPage)]);
    localStorage.setItem(
      "listOfPages",
      JSON.stringify([...newListOfPages(jobs, itemsPerPage)])
    );
  }, []);

  useEffect(() => {
    if (queryPage > noOfPages || queryPage <= 0) {
      navigate("/error");
      localStorage.clear();
    } else if (queryPage > 0 && queryPage <= noOfPages) {
      const pages = JSON.parse(localStorage.getItem("listOfPages"));
      setPage(queryPage);
      setJobPostings([
        ...jobs.slice(
          pages[queryPage - 1].fromIndex,
          pages[queryPage - 1].toIndex
        ),
      ]);
    }
  }, [navigate, noOfPages, queryPage]);

  return (
    <>
      <JobsLayout>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            width: "100%",
            height: "100%",
          }}
        >
          {jobPostings.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}

          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            color="error"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
              "& .MuiButtonBase-root": {
                color: "#fff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "18px",
                "& svg": {
                  width: "30px",
                  height: "30px",
                },
              },
            }}
          />
        </Box>
      </JobsLayout>
    </>
  );
}

const JobsLayout = styled(Box)(({ theme }) => ({
  padding: "100px 30px 0 30px",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    padding: "140px 60px 0 60px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "140px 80px 0 80px",
  },
}));

export default JobsSection;

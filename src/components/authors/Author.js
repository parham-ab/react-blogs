import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Grid, Typography } from "@mui/material";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// query to fetch blogs
import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
// preloader component
import PreLoader from "../common/PreLoader";

const Author = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <PreLoader />;
  if (error) {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <Grid container spacing={2} mt={9}>
      {data.authors.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id} m={3}>
          <Box component="div">
            <Link
              to={`/authors/${item.slug}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: " center",
              }}
            >
              <Avatar alt={item.name} src={item.avatar.url} />
              <Typography component="p" variant="p" color="text.secondary">
                {item.name}
              </Typography>
            </Link>
          </Box>
        </Grid>
      ))}
      <ToastContainer />
    </Grid>
  );
};

export default Author;

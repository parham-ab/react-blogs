import React from "react";
// query to fetch blogs comments
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/queries";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// mui components
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    toast.error("Failed to load comments!", {
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
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: "8px",
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} p={2} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comment list:
        </Typography>
        {data.comments.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            p={2}
            m={2}
            border="1px silver solid"
            borderRadius={5}
          >
            <Box component="div" display="flex" alignItems="center">
              <Avatar>{item.name[0]}</Avatar>
              <Typography
                component="span"
                variant="p"
                color="initial"
                fontWeight={700}
                ml={1}
              >
                {item.name}
              </Typography>
            </Box>
            <Typography
              component="p"
              variant="p"
              color="initial"
              fontWeight={700}
              m={3}
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Comments;

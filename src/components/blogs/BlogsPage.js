import React from "react";
// sanitize html
import sanitizeHtml from "sanitize-html";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// react router dom
import { useParams, useNavigate } from "react-router-dom";
// query to fetch author info
import { GET_BLOG } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Typography } from "@mui/material";
import CommentForm from "../comments/CommentForm";
// icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// preloader component
import PreLoader from "../common/PreLoader";
import Comments from "../comments/Comments";

const BlogsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { slug },
  });
  if (loading) return <PreLoader />;
  if (error) {
    return toast.error("Something went wrong!", {
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
  // destructuring data
  const {
    author: {
      name,
      field,
      avatar: { url },
    },
    title,
    coverPhoto,
    content: { html },
  } = data.post;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
        </Grid>

        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width={"100%"}
            loading={"lazy"}
            style={{ borderRadius: "12px" }}
          />
        </Grid>

        <Grid item xs={12} mt={6} display="flex" alignItems="center">
          <Avatar
            src={url}
            alt={name}
            sx={{ marginRight: 2, width: 55, height: 55 }}
          />
          <Box component="div">
            <Typography
              component="p"
              variant="body2"
              color="text.secondary"
              fontWeight={700}
            >
              {name}
            </Typography>
            <Typography component="p" variant="body2" color="text.secondary">
              {field}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}></div>
        </Grid>
        {/* comments */}
        <Grid item xs={12} mt={5}>
          <CommentForm slug={slug} />
        </Grid>
        {/* comments */}
        <Grid item xs={12} mt={5}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default BlogsPage;

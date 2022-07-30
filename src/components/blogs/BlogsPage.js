import React from "react";
// sanitize html
import sanitizeHtml from "sanitize-html";
// react router dom
import { useParams } from "react-router-dom";
// query to fetch author info
import { GET_BLOG } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import CardItems from "../common/CardItems";
// preloader component
import PreLoader from "../common/PreLoader";

const BlogsPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { slug },
  });
  if (loading) return <PreLoader />;
  if (error) return <p>Error :</p>;
  // destructuring data

  console.log(data);
  return <div></div>;
};

export default BlogsPage;

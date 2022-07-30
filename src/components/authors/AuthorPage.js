import React from "react";
// sanitize html
import sanitizeHtml from "sanitize-html";
// react router dom
import { useParams } from "react-router-dom";
// query to fetch author info
import { GET_AUTHOR } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import CardItems from "../common/CardItems";
// preloader component
import PreLoader from "../common/PreLoader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });
  if (loading) return <PreLoader />;
  if (error) return <p>Error :</p>;
  // destructuring data
  const {
    author: {
      name,
      field,
      avatar: { url },
      posts,
      description: { html },
    },
  } = data;

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid
            item
            xs={12}
            display={"flex"}
            flexDirection="column"
            alignItems="center"
          >
            <Avatar src={url} alt={url} sx={{ width: 250, height: 250 }} />
            <Typography
              component={"h3"}
              variant="h5"
              color="initial"
              fontWeight={700}
              mt={4}
            >
              {name}
            </Typography>
            <Typography component="p" variant="h6" color="text.secondary">
              {field}
            </Typography>
          </Grid>

          <Grid item xs={12} mt={5}>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}></div>
          </Grid>

          <Grid item xs={12} mt={6}>
            <Typography
              component="h2"
              variant="h5"
              fontWeight={700}
              color="initial"
            >
              {name} Articles:
            </Typography>
            <Grid
              container
              spacing={3}
              mt={4}
              display="flex"
              justifyContent="center"
            >
              {posts.map((item) => (
                <Grid item xs={12} sm={6} md={6} key={item.id}>
                  <CardItems
                    title={item.title}
                    slug={item.slug}
                    coverPhoto={item.coverPhoto.url}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AuthorPage;

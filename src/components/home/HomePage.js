import React from "react";
// react router dom
import { Link } from "react-router-dom";
// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography
            variant="h5"
            component={"h3"}
            mb={3}
            fontWeight={700}
            color="text.secondary"
          >
            Authors
          </Typography>
        </Grid>

        <Grid item xs={12} md={9} mt={4}>
          <Typography
            variant="h5"
            component={"h3"}
            mb={3}
            fontWeight={700}
            color="text.secondary"
          >
            Blogs
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

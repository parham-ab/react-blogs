import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// components
import Blogs from "../blogs/Blogs";
import Authors from "../authors/Authors";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Link to={`/authors`}>
            <Typography
              variant="h5"
              component={"h3"}
              mb={3}
              fontWeight={700}
              color="text.secondary"
            >
              Authors
            </Typography>
          </Link>
          <Authors />
        </Grid>

        <Grid item xs={12} md={9} mt={4}>
          <Link to={`/blogs`}>
            <Typography
              variant="h5"
              component={"h3"}
              mb={3}
              fontWeight={700}
              color="text.secondary"
            >
              Blogs
            </Typography>
          </Link>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

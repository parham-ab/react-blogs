import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

// query to fetch blogs
import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
// preloader component
import PreLoader from "../common/PreLoader";

const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <PreLoader />;
  if (error) return <p>Error :</p>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={9} sx={{ justifyContent: "center" }}>
        {data.posts.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{ minWidth: 270, maxWidth: 300, borderRadius: 4 }}
              elevation={3}
            >
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="avatar"
                    src={item.author.avatar.url}
                    alt={item.name}
                  />
                }
                title={
                  <Typography
                    component="p"
                    variant="p"
                    color="text.secondary"
                    sx={{ fontSize: "15px", fontWeight: 600 }}
                  >
                    {item.author.name}
                  </Typography>
                }
                sx={{ padding: "10px" }}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.coverPhoto.url}
                alt={item.id}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="body1"
                  color="text.secondary"
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
              </CardContent>
              <Divider variant="middle" sx={{ margin: "10px" }} />
              <CardActions disableSpacing>
                <Link to={`/blogs/${item.slug}`} style={{ width: "100%" }}>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      color: "#2e4b8d",
                      fontWeight: "600",
                    }}
                  >
                    read
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;

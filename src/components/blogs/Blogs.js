import React from "react";
import Grid from "@mui/material/Grid";
// query to fetch blogs
import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
// components
import CardItems from "../common/CardItems";

const Blogs = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {data.posts.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CardItems {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;

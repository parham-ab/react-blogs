import React from "react";
import { Divider, Grid } from "@mui/material";
// query to fetch authors
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
// components
import AuthorItems from "../common/AuthorItems";
// preloader component
import PreLoader from "../common/PreLoader";

const Authors = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <PreLoader />;
  if (error) return <p>Error :</p>;

  return (
    <Grid container className="authors-list">
      {data.authors.map((item, index) => (
        <React.Fragment key={item.id}>
          <Grid item xs={12} padding={2}>
            <AuthorItems {...item} />
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12} className="authors-item">
              <Divider />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;

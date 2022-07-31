import React from "react";
// react router dom
import { Link } from "react-router-dom";
// mui components
import { Avatar, Box, Typography } from "@mui/material";

const AuthorItems = ({ name, slug, avatar }) => {
  return (
    <Link to={`/authors/${slug}`}>
      <Box component="div" display={"flex"} alignItems="center">
        <Avatar alt={name} src={avatar.url} />
        <Typography
          component="p"
          variant="p"
          color="text.secondary"
          sx={{ marginLeft: 2 }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default AuthorItems;

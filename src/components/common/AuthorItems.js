import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

const AuthorItems = ({ id, name, slug, avatar }) => {
  return (
    <Link to={`/authors/${slug}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={name} src={avatar.url} />
        <Typography
          component="p"
          variant="p"
          color="text.secondary"
          sx={{ marginLeft: 2 }}
        >
          {name}
        </Typography>
      </div>
    </Link>
  );
};

export default AuthorItems;

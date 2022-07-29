import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const CardItems = (props) => {
  const {
    author: { name, avatar },
    id,
    slug,
    title,
    coverPhoto,
  } = props;

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 4 }} elevation={3}>
      <CardHeader
        avatar={<Avatar aria-label="avatar" src={avatar.url} alt={name} />}
        title={name}
        sx={{ padding: "10px" }}
      />
      <CardMedia component="img" height="194" image={coverPhoto.url} alt={id} />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.secondary"
          fontWeight={400}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions disableSpacing>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            size="small"
            variant="outlined"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            read
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardItems;

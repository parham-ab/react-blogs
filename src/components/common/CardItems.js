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

const CardItems = ({ author, id, slug, title, coverPhoto }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 4 }} elevation={3}>
      {author && (
        <CardHeader
          avatar={
            <Avatar
              aria-label="avatar"
              src={author.avatar.url}
              alt={author.name}
            />
          }
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              sx={{ fontSize: "15px", fontWeight: 600 }}
            >
              {author.name}
            </Typography>
          }
          sx={{ padding: "10px" }}
        />
      )}
      {coverPhoto.url ? (
        <CardMedia
          component="img"
          height="194"
          image={coverPhoto.url}
          alt={id}
        />
      ) : (
        <CardMedia component="img" height="194" image={coverPhoto} alt={id} />
      )}
      <CardContent>
        <Typography
          component="h3"
          variant="body1"
          color="text.secondary"
          fontWeight={600}
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
  );
};

export default CardItems;

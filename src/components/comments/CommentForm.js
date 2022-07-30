import React, { useState } from "react";
// mui components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";

const CommentForm = ({ slug }) => {
  const [userComments, setUserComments] = useState({
    username: "",
    email: "",
    text: "",
  });
  const changeHandle = (e) => {
    setUserComments({ ...userComments, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: "8px",
        py: 1,
        mt:5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          Comments:
        </Typography>
        <form>
          <TextField
            sx={{ marginTop: 2 }}
            fullWidth
            label="username"
            id="username"
            variant="outlined"
            value={userComments.username}
            onChange={changeHandle}
            name="username"
          />
          <TextField
            sx={{ marginTop: 2 }}
            fullWidth
            label="email"
            id="email"
            variant="outlined"
            value={userComments.email}
            onChange={changeHandle}
            name="email"
          />
          <TextField
            sx={{ marginTop: 2 }}
            label="text"
            id="text"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={userComments.text}
            onChange={changeHandle}
            name="text"
          />
          <Button type="submit" sx={{ marginTop: 2 }} variant="contained">
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CommentForm;

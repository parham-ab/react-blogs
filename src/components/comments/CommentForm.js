import React, { useState } from "react";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// mutation to post comments to the server
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
// mui components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CommentForm = ({ slug }) => {
  const [userComments, setUserComments] = useState({
    name: "",
    email: "",
    text: "",
  });
  // destructuring inputs state
  const { name, email, text } = userComments;
  //   post comment to the server
  const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  // comments input change handler
  const changeHandle = (e) => {
    setUserComments({ ...userComments, [e.target.name]: e.target.value });
  };
  // ! navigate to not found page --(contain bugs)
  if (error) {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  // sendHandle
  const sendHandle = (e) => {
    if (userComments.name && userComments.email && userComments.text) {
      sendComment();
      toast.success(
        "Comment posted successfully & will display after reviewing",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      // clear inputs after submitting
      userComments.name = "";
      userComments.email = "";
      userComments.text = "";
    } else {
      toast.error("Please fill all the inputs!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    console.log(data);
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: "8px",
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          Comments:
        </Typography>

        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          label="name"
          id="name"
          variant="outlined"
          value={userComments.name}
          onChange={changeHandle}
          name="name"
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
        <Button
          onClick={sendHandle}
          endIcon={<SendIcon />}
          sx={{ marginTop: 2 }}
          variant="contained"
          disabled={loading && true}
        >
          Send
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;

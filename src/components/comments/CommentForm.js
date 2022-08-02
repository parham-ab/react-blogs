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
// icons
import SendIcon from "@mui/icons-material/Send";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// formik
import { useFormik } from "formik";
import * as Yup from "yup";

// initial values
const initialValues = {
  name: "",
  email: "",
  text: "",
};
// validate function
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name Required!")
    .max(50, "your name can't be more than 50 chars!"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "invalid Email address"
    )
    .required("Required"),
  text: Yup.string()
    .trim()
    .min(5, "your comment must be at least 5 or more chars!")
    .max(500, "your comment can't be more than 500 chars!")
    .required("Text Required!"),
});
// submit
const onSubmit = (values) => {
  console.log(values);
};

const Test = ({ slug }) => {
  let finalValue = {};
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { values } = formik;
  values.slug = slug;
  // destructuring values
  finalValue = values;
  const { name, email, text } = finalValue;
  //   post comment to the server
  const [sendComment, { loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  // validation inputs before sending comment
  const senderHanlde = () => {
    if (
      !Object.keys(formik.errors).length &&
      formik.values.name &&
      formik.values.email &&
      formik.values.text
    ) {
      sendComment();
    }
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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            // required
            size="small"
            name="name"
            label="Name"
            fullWidth
            sx={{ marginTop: 2 }}
            error={formik.errors.name && true}
            helperText={
              formik.errors.name && formik.touched.name && formik.errors.name
            }
            {...formik.getFieldProps("name")}
          />

          <TextField
            // required
            size="small"
            name="email"
            label="Email"
            fullWidth
            sx={{ marginTop: 2 }}
            error={formik.errors.email && true}
            helperText={
              formik.errors.email && formik.touched.email && formik.errors.email
            }
            {...formik.getFieldProps("email")}
          />

          <TextField
            // required
            size="small"
            name="text"
            label="Text"
            fullWidth
            sx={{ marginTop: 2 }}
            error={formik.errors.text && true}
            helperText={
              formik.errors.text && formik.touched.text && formik.errors.text
            }
            {...formik.getFieldProps("text")}
          />

          <Button
            type="submit"
            endIcon={!loading ? <SendIcon /> : <HourglassTopIcon />}
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={senderHanlde}
            disabled={loading && true}
          >
            {!loading ? "Send" : "Sending..."}
          </Button>
        </form>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Test;

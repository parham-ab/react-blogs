import React from "react";
// mui components
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Typography
      variant="p"
      component="h4"
      color="primary"
      bgcolor={"#f7f7f7"}
      padding="10px"
      textAlign={"center"}
      mt={10}
    >
      Made with
      <Typography component={"span"} color="#ff4646">
        {" "}
        ❤{" "}
      </Typography>
      by
      <Typography
        component={"a"}
        color="#818181"
        href="https://parham-ab.netlify.app/"
        target={"_blank"}
        rel="noreferrer"
      >
        {" "}
        Parham Abolghasemi{" "}
      </Typography>
    </Typography>
  );
};

export default Footer;

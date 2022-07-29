import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// mui components
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
// icons
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#365781" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link to={`/`}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <DescriptionIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component={"h1"} flex={1} dir="rtl">
            Blogs Project
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

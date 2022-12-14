import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";
// components
import LayOut from "./components/layout";
import HomePage from "./components/home/HomePage";
import BlogsPage from "./components/blogs/BlogsPage";
import AuthorPage from "./components/authors/AuthorPage";
import Blog from "./components/blogs/Blog";
import Author from "./components/authors/Author";
import CustomScrollToTop from "./components/common/CustomScrollToTop";
// scroll to top button
import ScrollToTop from "react-scroll-to-top";

const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "Rubik"].join(","),
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <CustomScrollToTop />
        <ScrollToTop smooth top={200} color="#111" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogsPage />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
};

export default App;
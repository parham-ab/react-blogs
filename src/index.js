import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// apollo & graphql imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.scss";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
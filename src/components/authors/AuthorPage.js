import React from "react";
// react router dom
import { useParams } from "react-router-dom";
// query to fetch author info
import { GET_AUTHOR } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log({ loading, error, data });

  return <div></div>;
};

export default AuthorPage;

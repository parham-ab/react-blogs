import React from "react";
import { Rings } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <Rings
        height="100"
        width="100"
        color="#0078AA"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default PreLoader;

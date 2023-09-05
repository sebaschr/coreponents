import React from "react";
import { HeroBanner } from "components";

const ErrorPage = () => {
  return (
    <HeroBanner
      heading={"Error 404"}
      text={"It seems like a mistake was made. No page found in that path."}
      primaryBtnHref="/"
      primaryBtnText="Go Back Home"
    />
  );
};

export default ErrorPage;

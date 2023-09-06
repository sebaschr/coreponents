import React from "react";
import { HeroBanner, Container } from "components";
import { PageBase } from "structure";

const HomePage = () => {
  return (
    <PageBase title="Home">
      <HeroBanner
        backgroundImageSrc="https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"
        heading="This is a hero banner"
        backgroundColor="yellow"
      />
    </PageBase>
  );
};

export default HomePage;

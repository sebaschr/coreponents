import React from "react";
import { HeroBanner } from "components";

const HomePage = () => {
  return (
    <>
      <HeroBanner
        heading={"This is a Hero Banner"}
        text={"This is the text"}
        backgroundImageSrc={
          "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
        }
        primaryBtnHref="https://www.google.com/"
        primaryBtnText="Google"
      />

      <HeroBanner
        heading={"This is a Hero Banner"}
        text={"This is the text"}
        alignment="left"
        backgroundColor="yellow"
        secondaryBtnHref="https://www.google.com/"
        secondaryBtnText="Google"
      />

      <HeroBanner
        heading={"This is a Hero Banner"}
        text={"This is the text"}
        alignment="right"
        backgroundImageSrc={
          "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
        }
        backgroundColor="yellow"
        primaryBtnHref="https://www.google.com/"
        primaryBtnText="Google"
        secondaryBtnHref="https://www.google.com/"
        secondaryBtnText="Google"
        imageSrc={
          "https://media.istockphoto.com/id/483961501/photo/woman-dancing-singing-and-listening-to-the-music.jpg?s=612x612&w=0&k=20&c=i1QCMsD4K53Dp5DSEnnlVdn-xZYwX13XYdr2adNcDtE="
        }
        imageFirst
      />
    </>
  );
};

export default HomePage;

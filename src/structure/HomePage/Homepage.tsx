import React from "react";
import { HeroBanner, Embed, Container, Media, MediaGrid } from "components";

const HomePage = () => {
  return (
    <>
      <HeroBanner
        heading={"This is a Hero Banner"}
        text={"This is the text"}
        backgroundImageSrc={
          "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg"
        }
        primaryBtnHref="https://www.google.com/"
        primaryBtnText="Google"
      />

      <Container>
        <Embed
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.354683718022!2d-84.00616509999999!3d9.92657315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e15390f44665%3A0xd4f592157037b707!2sCentro%20Comercial%20MonPlaza!5e0!3m2!1sen!2scr!4v1692295665120!5m2!1sen!2scr"
          altText="LOL"
        />
        <Embed
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.354683718022!2d-84.00616509999999!3d9.92657315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e15390f44665%3A0xd4f592157037b707!2sCentro%20Comercial%20MonPlaza!5e0!3m2!1sen!2scr!4v1692295665120!5m2!1sen!2scr"
          altText="LOL"
        />
      </Container>

      <HeroBanner
        heading={"This is a Hero Banner"}
        text={"This is the text"}
        alignment="left"
        backgroundColor="yellow"
        secondaryBtnHref="https://www.google.com/"
        secondaryBtnText="Google"
      />

      <Container>
        <Media src="https://youtu.be/rxZclILkjiY" />
        <Media src="https://www.youtube.com/embed/wd-rDJytFl0" />
        <Media src="https://www.youtube.com/watch?v=wd-rDJytFl0" />
      </Container>

      <MediaGrid mobileColumns={3} tabletColumns={2} desktopColumns={4}>
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
      </MediaGrid>
    </>
  );
};

export default HomePage;

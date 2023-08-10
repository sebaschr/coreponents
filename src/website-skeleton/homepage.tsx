import React from "react";
import { HeroBanner, CardContainer, Card, Container, Banner } from "components";
import { skills } from "services/data";

const HomePage = () => {
  return (
    <div>
      <HeroBanner
        heading="hi i am seb"
        text="i'm a web developer"
        hasBackground
      />
      <Container>
        <CardContainer>
          <Card
            heading={"passionate about web development"}
            text={"specially the frontend"}
          />
          <Card
            heading={"positive attitude & teamwork"}
            text={"always down to help each other out to work towards our goal"}
          />
          <Card
            heading={"years of experience on web development"}
            text={"and a bit extra on customer service jobs."}
          />
        </CardContainer>
      </Container>

      <HeroBanner
        heading="located in beautiful costa rica"
        text="but open to work remotely."
      />
      <Container>
        <Banner heading={"Hello"} textList={skills} />
      </Container>

      {/* <Banner content={"Wanna work together?"} */}
    </div>
  );
};

export default HomePage;

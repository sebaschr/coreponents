import React from "react";
import { Button } from "components";
// import { skills } from "services/data";

const HomePage = () => {
  return (
    <div>
      <Button linkText="Primary btn" variant="primary" />
      <Button linkText="Secondary btn" variant="secondary" />
      <Button linkText="Tertiary btn" variant="tertiary" />
      <Button linkText="Transparent btn" variant="transparent" />

      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <Button linkText="Transparent White Btn" variant="transparent-white" />
      </div>

      {/* <Button linkText="Extra Large Btn" variant="primary" size="xl" />
      <Button linkText="Large Btn" variant="primary" size="lg" />
      <Button linkText="Medium Btn" variant="primary" size="md" />
      <Button linkText="Small Btn" variant="primary" size="sm" /> */}
    </div>
  );
};

export default HomePage;

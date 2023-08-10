import React from "react";
import styles from "./HeroBanner.module.scss";
import { Text, Heading } from "components";
import { BOOLEAN_FALSE } from "utils/constants";
import cx from "classnames";
import { HeroBannerPropTypes } from "components/dialogProps";

const HeroBanner = ({
  heading,
  text,
  alignment,
  hasBackground = BOOLEAN_FALSE,
  isBackgroundImage = BOOLEAN_FALSE,
}: HeroBannerPropTypes) => {
  return (
    <div
      className={cx(
        styles.root,
        {
          [styles.background]: hasBackground,
        },
        styles[`alignment--${alignment}`]
      )}
    >
      <div className={styles.container}>
        <Heading content={heading} className={styles.title} />
        <Text content={text} size="xl" />
      </div>
    </div>
  );
};

export default HeroBanner;

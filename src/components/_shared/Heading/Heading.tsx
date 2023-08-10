import React from "react";
import styles from "./Heading.module.scss";
import cx from "classnames";
import { HeadingPropTypes } from "components/dialogProps";

const Heading = ({ content, headingStyle, className }: HeadingPropTypes) => {
  return (
    <div
      className={cx(styles.root, styles[`style--${headingStyle}`], className)}
    >
      {content}
    </div>
  );
};

export default Heading;

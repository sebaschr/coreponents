import React from "react";
import styles from "./Heading.module.scss";
import cx from "classnames";
import { HeadingPropTypes } from "components/dialogProps";
import { getGlobalClasses } from "utils/functions";

const Heading = ({
  content,
  headingStyle,
  className,
  alignment,
}: HeadingPropTypes) => {
  const globalClasses = getGlobalClasses(["alignment"], [alignment]);

  return (
    <div
      className={cx(
        globalClasses,
        styles.root,
        styles[`style--${headingStyle}`],
        className
      )}
    >
      {content}
    </div>
  );
};

export default Heading;

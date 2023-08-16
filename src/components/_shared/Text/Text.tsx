import React from "react";
import styles from "./Text.module.scss";
import cx from "classnames";
import { SIZE_MD } from "utils/constants";
import { TextPropTypes } from "components/dialogProps";
import { getGlobalClasses } from "utils/functions";

const Text = ({
  alignment,
  content,
  className,
  size = SIZE_MD,
}: TextPropTypes) => {
  const globalClasses = getGlobalClasses(["alignment"], [alignment]);

  return (
    <p
      className={cx(
        globalClasses,
        styles.root,
        styles[`size--${size}`],
        className
      )}
    >
      {content}
    </p>
  );
};

export default Text;

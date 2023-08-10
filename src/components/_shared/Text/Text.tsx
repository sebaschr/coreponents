import React from "react";
import styles from "./Text.module.scss";
import cx from "classnames";
import { SIZE_MD } from "utils/constants";
import { TextPropTypes } from "components/dialogProps";

const Text = ({ content, className, size = SIZE_MD }: TextPropTypes) => {
  return (
    <p className={cx(styles.root, styles[`size--${size}`], className)}>
      {content}
    </p>
  );
};

export default Text;

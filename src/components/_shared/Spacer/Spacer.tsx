import React from "react";
import styles from "./Spacer.module.scss";
import { getGlobalClasses } from "utils/functions";
import cx from "classnames";
import { SpacerPropTypes } from "components/dialogProps";
import { COLOR_BLACK, SIZE_SM } from "utils/constants";

const Spacer = ({
  backgroundColor = COLOR_BLACK,
  size = SIZE_SM,
  className,
}: SpacerPropTypes) => {
  const globalClasses = getGlobalClasses(
    ["backgroundColor"],
    [backgroundColor]
  );

  return (
    <div
      className={cx(
        globalClasses,
        styles.root,
        styles[`size--${size}`],
        className
      )}
    />
  );
};

export default Spacer;

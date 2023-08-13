import React from "react";
import { BOOLEAN_FALSE } from "utils/constants";
import styles from "./Container.module.scss";
import cx from "classnames";
import { ContainerPropTypes } from "components/dialogProps";

const Container = ({
  isFullWidth = BOOLEAN_FALSE,
  children,
  className,
}: ContainerPropTypes) => {
  return (
    <div
      className={cx(styles.root, {
        [styles.full]: isFullWidth,
        className,
      })}
    >
      {children}
    </div>
  );
};

export default Container;

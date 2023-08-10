import React from "react";
import styles from "./CardContainer.module.scss";
import { CardContainerPropTypes } from "components/dialogProps";
import cx from "classnames";

const CardContainer = ({ className, children }: CardContainerPropTypes) => {
  return <div className={cx(styles.root, className)}>{children}</div>;
};

export default CardContainer;

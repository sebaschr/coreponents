import React from "react";
import styles from "./PageBackground.module.scss";
import { PageBackgroundPropTypes } from "components/dialogProps";

const PageBackground = ({ children }: PageBackgroundPropTypes) => {
  return <div className={styles.root}>{children}</div>;
};

export default PageBackground;

import React from "react";
import styles from "./FooterColumn.module.scss";
import { Heading } from "components";
import { FooterColumnPropTypes } from "components/dialogProps";

const FooterColumn = ({ children, heading }: FooterColumnPropTypes) => {
  return (
    <div className={styles.root}>
      <Heading content={heading} className={styles.heading} />
      {children}
    </div>
  );
};

export default FooterColumn;

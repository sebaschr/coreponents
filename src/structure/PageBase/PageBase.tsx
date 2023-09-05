import React, { useEffect } from "react";
import { Container, Heading, NavHeader, Spacer } from "components";
import styles from "./PageBase.module.scss";
import { classNameandChildren } from "components/dialogProps/sharedProps";
import cx from "classnames";
import { BOOLEAN_FALSE } from "utils/constants";

type PageBasePropTypes = {
  headingText: string;
  title: string;
  noSpacer?: boolean;
};

const PageBase = ({
  children,
  headingText,
  title,
  className,
  noSpacer = BOOLEAN_FALSE,
}: classNameandChildren & PageBasePropTypes) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <Container isFullWidth className={styles["main-container"]}>
        <NavHeader />

        <div
          className={cx(
            styles.container,
            styles["heading-container"],
            className
          )}
          id="page-base-container"
        >
          <Heading
            content={headingText}
            headingStyle="h1"
            className={styles.heading}
          />
          {!noSpacer && <Spacer className={styles.spacer} />}
          {children}
        </div>
      </Container>
    </>
  );
};

export default PageBase;

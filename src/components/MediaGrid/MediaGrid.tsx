import React from "react";
import styles from "./MediaGrid.module.scss";
import { MediaGridPropTypes } from "components/dialogProps";
import cx from "classnames";
import { BOOLEAN_FALSE } from "utils/constants";

const MediaGrid = ({
  className,
  children,
  mobileColumns,
  desktopColumns,
  tabletColumns = desktopColumns,
  withoutSpace = BOOLEAN_FALSE,
}: MediaGridPropTypes) => {
  return (
    <div
      className={cx(
        styles.root,
        { [styles["root--spaced"]]: !withoutSpace },
        styles[`container-mobile-${mobileColumns}`],
        styles[`container-tablet-${tabletColumns}`],
        styles[`container-desktop-${desktopColumns}`],
        className
      )}
    >
      {children}
    </div>
  );
};

export default MediaGrid;

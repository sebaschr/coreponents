import React from "react";
import { BOOLEAN_FALSE } from "utils/constants";
import styles from "./Container.module.scss";
import cx from "classnames";
import { ContainerPropTypes } from "components/dialogProps";
import { createContext } from "react";
import { THEME_LIGHT } from "utils/constants";

const ContainerThemeContext = createContext(THEME_LIGHT);

const Container = ({
  isFullWidth = BOOLEAN_FALSE,
  children,
  className,
  overrideTheme = false,
  theme = THEME_LIGHT,
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

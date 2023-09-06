import React, { useEffect, useState } from "react";
import { Container, NavHeader, Footer } from "components";
import styles from "./PageBase.module.scss";
import { classNameandChildren } from "components/dialogProps/sharedProps";
import cx from "classnames";
import { THEME_LIGHT, ThemeStateModel } from "utils/constants";

type PageBasePropTypes = {
  title: string;
};

export const initialThemeState: ThemeStateModel = {
  theme: THEME_LIGHT,
  setTheme: null,
};

export const ThemeContext = React.createContext(initialThemeState);

const PageBase = ({
  children,
  title,
  className,
}: classNameandChildren & PageBasePropTypes) => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cx(styles.root, `themed--${theme}`)}>
        <NavHeader />
        <Container isFullWidth className={styles["main-container"]}>
          <div className={cx(className)} id="page-base-container">
            {children}
          </div>
        </Container>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default PageBase;

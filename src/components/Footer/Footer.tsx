import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import { Text, Button, Link, Spacer } from "components";
import { socials } from "services/data";
import {
  SOCIALS_ICONS,
  SIZE_MD,
  BUTTON_TRANSPARENT,
  BUTTON_TRANSPARENT_WITH_BORDER,
  LINK_TARGET_EXTERNAL,
  COLOR_WHITE,
  SIZE_SM,
} from "utils/constants";
import FooterColumn from "./FooterColumn/FooterColumn";
import { ThemeContext } from "structure/PageBase/PageBase";
import cx from "classnames";

const NavHeader = () => {
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { theme, setTheme } = useContext(ThemeContext);

  const Socials = () => {
    return (
      <div className={styles.socials}>
        {socials &&
          socials.map((social, index) => {
            return (
              <Button
                key={index}
                className={styles.social}
                variant={BUTTON_TRANSPARENT}
                iconName={SOCIALS_ICONS[social.name]}
                iconSize={SIZE_MD}
                label={social.name}
              />
            );
          })}
      </div>
    );
  };

  return (
    <div className={cx(styles.root, styles[`root--${theme}`])}>
      <div className={styles.container}>
        <div className={styles["content-container"]}>
          <FooterColumn heading={"Footer Col Title"}>
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link One"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Two"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Three"
              className={styles.link}
              size={SIZE_MD}
            />
          </FooterColumn>

          <FooterColumn heading={"Footer Col Title"}>
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link One"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Two"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Three"
              className={styles.link}
              size={SIZE_MD}
            />
          </FooterColumn>

          <FooterColumn heading={"Footer Col Title"}>
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link One"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Two"
              className={styles.link}
              size={SIZE_MD}
            />
            <Link
              href="/"
              target={LINK_TARGET_EXTERNAL}
              linkText="Footer Link Three"
              className={styles.link}
              size={SIZE_MD}
            />
          </FooterColumn>
        </div>

        <Spacer backgroundColor={COLOR_WHITE} />

        <div className={styles["bottom-container"]}>
          <Text content={"Copyright Lorem Ipsum"} size={SIZE_SM} />
          <Socials />
        </div>

        <Button
          variant={BUTTON_TRANSPARENT_WITH_BORDER}
          iconName="arrow-up"
          iconSize={SIZE_MD}
          label="Back to Top"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          linkText={theme}
        />

        <Button
          variant={BUTTON_TRANSPARENT_WITH_BORDER}
          iconName="arrow-up"
          iconSize={SIZE_MD}
          className={styles["back-to-top"]}
          label="Back to Top"
          onClick={topFunction}
        />
      </div>
    </div>
  );
};

export default NavHeader;

import React, { useEffect, useState } from "react";
import styles from "./NavHeader.module.scss";
import { Text, Link, Image, Button, Banner } from "components";
import { reportWindowSize } from "utils/functions";
import {
  SIZE_LG,
  SIZE_MD,
  LINK_TARGET_EXTERNAL,
  BUTTON_TRANSPARENT,
} from "utils/constants";
import cx from "classnames";

// TO DO:Nav Menu Items Submenus & Animations

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(reportWindowSize);

  useEffect(() => {
    function checkScreenSize() {
      setIsDesktop(reportWindowSize);
    }

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  const NavList = () => {
    return (
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_EXTERNAL}
            href="/"
            linkText="Nav Item One"
            size={SIZE_MD}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_EXTERNAL}
            href="/"
            linkText="Nav Item Two"
            size={SIZE_MD}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_EXTERNAL}
            href="/"
            linkText="Nav Item Three"
            size={SIZE_MD}
          />
        </li>
      </ul>
    );
  };

  const Logo = () => {
    return (
      <Link
        href="/"
        target={LINK_TARGET_EXTERNAL}
        className={styles["logo-container"]}
      >
        <Image
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-900x900.png"
          altText="logo"
          className={styles.logo}
        />
        <Text className="sr-only" content="Logo" />
      </Link>
    );
  };

  return (
    <nav
      className={cx(styles.root, {
        [styles["root--open"]]: isOpen && !isDesktop,
      })}
    >
      <Banner backgroundColor="grey">
        <Text content="This is a banner" />
      </Banner>
      {isDesktop ? (
        <div className={styles["nav-container"]}>
          <Logo />
          <NavList />
        </div>
      ) : (
        <div className={styles["mobile-menu-container"]}>
          <div className={styles["mobile-container"]}>
            <Logo />
            <Button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.burger}
              iconName={isOpen ? "x" : "burger"}
              variant={BUTTON_TRANSPARENT}
              iconSize={isOpen ? SIZE_MD : SIZE_LG}
            />
          </div>

          {isOpen && (
            <div className={styles["mobile-menu"]}>
              <NavList />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavHeader;

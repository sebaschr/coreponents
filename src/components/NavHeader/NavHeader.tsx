import React, { useEffect, useState } from "react";
import styles from "./NavHeader.module.scss";
import { Text, Link, Image, Button } from "components";
import { reportWindowSize } from "utils/functions";
import { SIZE_LG, SIZE_MD } from "utils/constants";

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
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link target={"_blank"} href="/" linkText="About Me" size={SIZE_LG} />
        </li>
        {isDesktop && (
          <li className={styles.navItem}>
            <Logo />
          </li>
        )}
        <li className={styles.navItem}>
          <Link target={"_blank"} href="/" linkText="Work" size={SIZE_LG} />
        </li>
      </ul>
    );
  };

  const Logo = () => {
    return (
      <Button variant="link">
        <Image
          src="https://www.freepnglogos.com/uploads/xbox-logo-black-png-7.png"
          altText="logo"
          className={styles.logo}
        />
        <Text className="sr-only" content="Logo" />
      </Button>
    );
  };

  return (
    <nav className={styles.root}>
      {isDesktop ? (
        <NavList />
      ) : (
        <>
          <div className={styles["mobile-container"]}>
            <Logo />
            <Button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.burger}
              iconName={isOpen ? "x" : "burger"}
              variant="primary"
              iconSize={isOpen ? SIZE_MD : SIZE_LG}
            />
          </div>

          {isOpen && (
            <div className={styles["mobile-menu"]}>
              <NavList />
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default NavHeader;

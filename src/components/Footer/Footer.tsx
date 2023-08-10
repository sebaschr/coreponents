import React from "react";
import styles from "./Footer.module.scss";
import { Text, Button } from "components";
import { socials } from "services/data";
import cx from "classnames";
import {
  SOCIALS_ICONS,
  LINK_TARGET_EXTERNAL,
  SIZE_SM,
  SIZE_MD,
} from "utils/constants";

const NavHeader = () => {
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles.root}>
      <Text content="seb chacon 2023" size={SIZE_SM} />
      <div className={styles.socials}>
        {socials &&
          socials.map((social, index) => {
            return (
              <Button
                className={cx({ [styles.social]: index === 0 })}
                variant="link-text"
                iconName={SOCIALS_ICONS[social.name]}
                iconSize={SIZE_MD}
                target={LINK_TARGET_EXTERNAL}
                href={social.url}
              />
            );
          })}
      </div>

      <Button
        variant="link-text"
        iconName="arrow-up"
        iconSize={SIZE_MD}
        className={styles["back-to-top"]}
        label="Back to Top"
        onClick={topFunction}
      />
    </div>
  );
};

export default NavHeader;

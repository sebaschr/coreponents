import React, { useState } from "react";
import { Button } from "components";
import styles from "./Banner.module.scss";
import { BannerPropTypes } from "components/dialogProps";
import { BUTTON_TRANSPARENT } from "utils/constants";
import { getGlobalClasses } from "utils/functions";
import cx from "classnames";
import { COLOR_BLACK } from "../../../utils/constants";

const Banner = ({
  children,
  backgroundColor = COLOR_BLACK,
}: BannerPropTypes) => {
  const [isClosed, setIsClosed] = useState(false);

  const globalClasses = getGlobalClasses(
    ["backgroundColor"],
    [backgroundColor]
  );

  function closeMenu() {
    setIsClosed(true);
  }

  return (
    <>
      {!isClosed && (
        <div className={cx(globalClasses)}>
          <div className={styles.root}>
            <div className={styles["children-container"]}>{children}</div>
            <Button
              variant={BUTTON_TRANSPARENT}
              iconName="x"
              onClick={closeMenu}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;

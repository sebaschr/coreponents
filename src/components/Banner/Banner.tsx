import React from "react";
import styles from "./Banner.module.scss";
import { Text } from "components";
import cx from "classnames";
import { BannerPropTypes } from "components/dialogProps";

const Banner = ({ textList, alignment }: BannerPropTypes) => {
  return (
    <div className={cx(styles.root, styles[`alignment--${alignment}`])}>
      <div className={styles.container}>
        {textList &&
          textList.map((text) => {
            return (
              <Text
                key={text.id}
                content={text.name}
                className={styles.skill}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Banner;

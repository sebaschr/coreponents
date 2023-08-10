import React from "react";
import styles from "./Icon.module.scss";
import { icons } from "assets/icons";
import { SIZE_SM } from "utils/constants";
import cx from "classnames";
import { IconPropTypes } from "components/dialogProps";

const Icon = ({ name, label, size = SIZE_SM, className }: IconPropTypes) => {
  const CustomTag = icons[name];

  return (
    <div className={cx(styles.root, styles[`size--${size}`], className)}>
      <CustomTag aria-label={label || name} />
    </div>
  );
};

export default Icon;

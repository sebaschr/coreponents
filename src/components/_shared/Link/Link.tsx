import React from "react";
import { SIZE_LG, SIZE_SM } from "utils/constants";
import styles from "./Link.module.scss";
import { Text, Icon } from "components";
import { LinkPropTypes } from "components/dialogProps";

const Link = ({
  href,
  linkText,
  children,
  target,
  size = SIZE_LG,
  iconSize = SIZE_SM,
  iconName,
}: LinkPropTypes) => {
  const noText: boolean = children !== null || linkText != null;

  return (
    <a className={styles.root} href={href} target={target}>
      {noText && children
        ? children
        : noText && <Text content={linkText} size={size} />}
      {iconName && <Icon name={iconName} size={iconSize} />}
    </a>
  );
};

export default Link;

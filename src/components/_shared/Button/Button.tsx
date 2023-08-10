import React from "react";
import { ButtonPropTypes } from "components/dialogProps";
import { Icon, Text } from "components";
import styles from "./Button.module.scss";
import cx from "classnames";
import { SIZE_SM } from "utils/constants";

const Button = ({
  href,
  variant,
  target,
  iconName,
  iconSize = SIZE_SM,
  onClick,
  children,
  linkText,
  className,
  label,
}: ButtonPropTypes) => {
  function onRedirect() {
    window.location.href = href;
  }

  return (
    <button
      type="button"
      className={cx(styles.root, styles[`type--${variant}`], className)}
      onClick={href ? onRedirect : onClick}
      aria-label={label}
      title={label}
    >
      {children ? (
        children
      ) : (
        <>
          {linkText && <Text content={linkText} />}
          {iconName && <Icon name={iconName} size={iconSize} />}
        </>
      )}
    </button>
  );
};

export default Button;

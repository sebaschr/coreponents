import React from "react";
import { ButtonPropTypes } from "components/dialogProps";
import { Icon, Text } from "components";
import styles from "./Button.module.scss";
import cx from "classnames";
import { SIZE_MD, SIZE_SM } from "utils/constants";

const Button = ({
  variant,
  iconName,
  iconSize = SIZE_SM,
  size = SIZE_MD,
  onClick,
  children,
  linkText,
  className,
  label,
  href,
}: ButtonPropTypes) => {
  function redirect() {
    if (href) {
      window.location.href = href;
    }
  }

  return (
    <button
      type="button"
      className={cx(
        styles.root,
        styles[`variant--${variant}`],
        styles[`size--${size}`],
        className
      )}
      aria-label={label || linkText}
      title={label || linkText}
      onClick={href ? redirect : onClick}
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

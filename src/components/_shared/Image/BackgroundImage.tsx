import React from "react";
import styles from "./Image.module.scss";
import cx from "classnames";
import { ImagePropTypes } from "components/dialogProps";

const BackgroundImage = ({ src, className, altText }: ImagePropTypes) => {
  return (
    <div className={cx(styles.background, className)}>
      <img
        aria-label={altText}
        className={cx(styles.image, className)}
        src={src}
      />
    </div>
  );
};

export default BackgroundImage;

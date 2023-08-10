import React from "react";
import styles from "./Image.module.scss";
import cx from "classnames";
import BackgroundImage from "./BackgroundImage";
import { IMAGE_STRING, BOOLEAN_FALSE, SHAPE_BOX } from "utils/constants";
import { ImagePropTypes } from "components/dialogProps";

const Image = ({
  src,
  className,
  isBackground = BOOLEAN_FALSE,
  altText = IMAGE_STRING,
  shape = SHAPE_BOX,
}: ImagePropTypes) => {
  return isBackground ? (
    <BackgroundImage aria-label={altText} className={className} src={src} />
  ) : (
    <img
      aria-label={altText}
      className={cx(styles.image, styles[`shaped--${shape}`], className)}
      src={src}
    />
  );
};

export default Image;

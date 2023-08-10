import React from "react";
import styles from "./Video.module.scss";
import cx from "classnames";
import { Video } from "components";
import { VideoPropTypes } from "components/dialogProps";

const BackgroundVideo = ({ src, className }: VideoPropTypes) => {
  return (
    <div className={cx(styles.background, className)}>
      <Video src={src} />
    </div>
  );
};

export default BackgroundVideo;

import React from "react";
import styles from "./Embed.module.scss";
import { EmbedPropTypes } from "components/dialogProps";
import cx from "classnames";

const Embed = ({ className, altText, src }: EmbedPropTypes) => {
  return (
    <iframe
      loading="lazy"
      title={altText}
      allowFullScreen
      className={cx(styles.root, className)}
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
    ></iframe>
  );
};

export default Embed;

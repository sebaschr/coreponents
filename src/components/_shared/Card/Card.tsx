import React from "react";
import { CardPropTypes } from "components/dialogProps";
import { Heading, Media, Link, Text, Button } from "components";
import styles from "./Card.module.scss";
import cx from "classnames";
import { BOOLEAN_FALSE } from "utils/constants";
import { getGlobalClasses } from "utils/functions";

const Card = ({
  shape,
  imageSrc,
  heading,
  text,
  className,
  href,
  linkText,
  target,
  asButton = BOOLEAN_FALSE,
  hasBorder,
}: CardPropTypes) => {
  const isButton: boolean = href && asButton;

  const globalClasses = hasBorder ? getGlobalClasses(["border"], []) : "";

  return (
    <div className={cx(globalClasses, styles.root, className)}>
      {imageSrc && <Media src="" shape={shape} />}
      <Heading content={heading} className={styles.title} />
      <Text content={text} className={styles.description} />
      {isButton ? (
        <Button
          variant="primary"
          className={styles.button}
          linkText={linkText}
        />
      ) : (
        href && (
          <Link
            href={href}
            target={target}
            className={styles.link}
            linkText={linkText}
          />
        )
      )}
    </div>
  );
};

export default Card;

import React from "react";
import { CardPropTypes } from "components/dialogProps";
import { Heading, Image, Link, Text, Button } from "components";
import styles from "./Card.module.scss";
import cx from "classnames";
import { BOOLEAN_FALSE } from "utils/constants";

const Card = ({
  shape,
  imageSrc,
  heading,
  text,
  className,
  href,
  target,
  asButton = BOOLEAN_FALSE,
  hasBorder,
}: CardPropTypes) => {
  const isButton: boolean = href && asButton;

  return (
    <div
      className={cx(
        styles.root,
        {
          [styles.border]: hasBorder,
        },
        className
      )}
    >
      {imageSrc && <Image src="" shape={shape} />}
      <Heading content={heading} className={styles.title} />
      <Text content={text} className={styles.description} />
      {isButton ? (
        <Button
          href={href}
          variant="primary"
          target={target}
          className={styles.button}
        />
      ) : (
        href && <Link href={href} target={target} className={styles.link} />
      )}
    </div>
  );
};

export default Card;

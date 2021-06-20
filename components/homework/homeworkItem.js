import React from "react";
import Link from "next/link";
import styles from "./homework.module.scss";

export default function Item({ name, remote_url, price }) {
  return (
    <div className={styles.cards_list}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          {" "}
          <img src={remote_url} />{" "}
        </div>

        <div className={styles.card_title}>
          <p>{name}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

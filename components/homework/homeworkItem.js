import React from "react";
import Link from "next/link";
import styles from "./homework.module.scss";

export default function Item({ name, url, img}) {
  return (
    <div className={styles.cards_list}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={img}/>
        </div>

        <div className={styles.card_title}>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

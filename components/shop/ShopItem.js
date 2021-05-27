import React from 'react';
import Link from 'next/link';
import styles from './ShopContainer.module.scss';

export default function ShopItem({name,remote_url,price}) {
    return (
        <div className={styles.card_container}>
    <div className={styles.card_card_1}>
    <div className={styles.card_img}>
        <img id={styles.image} src={remote_url}></img>
    </div>
    <a href="" className={styles.card_link}>
      <div className={styles.card_img_hovered}></div>
    </a>
    <div className={styles.card_info}>
      <h1 className={styles.card_title}>{name}</h1>
      <div className={styles.card_creator}>$<a href="">{price}</a></div>
    </div>
  </div>
    <div className={styles.card_img}></div>
    <a href="" className={styles.card_link}>
      <div className={styles.card_img_hovered}></div>
    </a>
  </div>
    )
}

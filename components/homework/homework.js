import styles from "./homework.module.scss";
import {useState} from 'react';
import Item from './homeworkItem';

export default function ItemContainer({categories}) { 
    // const {categories} = props;
    // console.log('categories',categories);


    return (
        <div>
            <h1 className={styles.products_header__1iU36}>作品集</h1>
            <div className={styles.homepage}>
                {categories.map(({name, url, img})=>(
                    <Item name={name} url={url} img={img}/>
                ))}
        </div>
        </div>
    )
}

import styles from './ShopContainer.module.scss';
import {useState} from 'react';
import Item from './Item';

export default function ItemContainer({Title,categories}) { 
    // const {categories} = props;
    // console.log('categories',categories);
    const title = Title.toUpperCase();


    return (
        <div>
            <h1 className={styles.products_header__1iU36}>{title} Page</h1>
            <div className={styles.homepage}>
                {categories.map(({name, remote_url,cid, price})=>(
                    <Item key={cid} name={name} remote_url={remote_url} price={price} />
                ))}
        </div>
        </div>
    )
}

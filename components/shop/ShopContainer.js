import {useState} from 'react';
import ShopItem from '../shop/ShopItem';

export default function ShopContainer({categories}) { 
    // const {categories} = props;
    // console.log('categories',categories);

    return (
        <div>
                {categories.map(({name, remote_url,cid, price})=>(
                    <ShopItem key={cid} name={name} remote_url={remote_url} price={price} />
                ))}
        </div>
    )
}

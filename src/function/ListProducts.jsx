import React from 'react'
import { listProduct } from '../listProduct';
//components
import Item from '../components/Item';

export default function ListProducts({ section }) {
 
    return (
        <div className={(section === "tomatoBase" || section === "creamBase")?"sectionPizza listProduct" : 'listProduct'}>
            {(listProduct[section]).map((item, index) => (
                <Item section={section} item={item} key={index}/>
            ))}
        </div>
    )
}

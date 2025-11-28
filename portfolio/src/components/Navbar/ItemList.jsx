import React, { useState } from 'react'
import { Item } from './Item';
import { Link } from 'react-router-dom';

export const ItemList = ({listItem}) => {


        const[displayCurrentChildren, setdisplayCurrentChildren] = useState({});


    const handleShowChild = (getcurrentLevel)=> {
       
        setdisplayCurrentChildren({
            ...displayCurrentChildren , [getcurrentLevel] : !displayCurrentChildren[getcurrentLevel]
        })
    }


    console.log(displayCurrentChildren)
  return (
    
       <li>

       <div className='items'>
       <Link to={listItem.path} className='link'>{listItem.label}</Link>

         {listItem && listItem.children && listItem.children.length ?  <span onClick={()=> handleShowChild(listItem.label)}>{displayCurrentChildren[listItem.label]=== true ? '-': '+'}</span>: null}
       </div>

        {
            listItem && listItem.children && listItem.children.length > 0 && displayCurrentChildren[listItem.label] ?

            <Item item={listItem.children}/>
            :null
        }
    </li>
  )
}



import React from 'react'
import { Item } from './Item'
import '../../styles/Navbar.css'

export const IndexNavbar = ({menus =[]}) => {


    
  return (
    <div className='parent-munus'>
        <Item item={menus}/>
    </div>
  )
}

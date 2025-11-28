import React from 'react'
import { ItemList } from './ItemList'

export const Item = ({item = []}) => {
  return (
      <ul className='menu'>


        {
            item && item.length > 0 ?
                item.map((itemlist, index)=>{

                    return <ItemList listItem={itemlist} />
                })
            :null
        }
      </ul>
  )
}

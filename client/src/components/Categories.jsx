import React, { useState } from 'react';

const Categories=React.memo(function Categories({items,onClickItem}){
  const [activeItem,setActiveItem]=useState(null);
  const selectedItem=index=>{
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
         className={activeItem===null?'active':''} 
        onClick={()=>selectedItem(null)}>
          Все
        </li>
        {items.map((item,index)=>(
          <li
           className={activeItem === index?'active':''}
            onClick={()=>selectedItem(index)} key={`${index}_${item}`}>{item}
            </li>
        ))}
        
      </ul>
    </div>
  );
        }
)

export default Categories;

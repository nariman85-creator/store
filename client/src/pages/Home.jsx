import React, { useCallback,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup,PizzaBlock} from '../components';
import {setCategory} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';



const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems=[{
  name:'популярности',type:'popular',
  name:'цене',type:'price',
  name:'алфавит',type:'alphabet'
}];

function Home() {
     const items=useSelector(({pizzas})=>pizzas.items);
     const dispatch=useDispatch();
     const onSelectCategory=useCallback((index)=>{
              dispatch(setCategory(index));

     },[]);
       useEffect(()=>{
    dispatch(fetchPizzas());
    
  },[dispatch]);



  return (
    <div className="container">
      <div className="content__top">
        <Categories
        onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortIems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
      {
        items.map((obj)=>(

        <PizzaBlock
         key={`${obj.name}__${obj.index}`} 
         {...obj}/>
        ))
      }
      </div>
    </div>
  );
}

export default Home;

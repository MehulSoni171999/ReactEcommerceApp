import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsAsync } from '../Stor/CardData/CardSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { bgcolor } from '@mui/system';

import { addCart } from '../Stor/action/Action';

const Home = () => {

    const dispatch= useDispatch();

    const Item = useSelector((state)=>state.cards.cards);
console.log(Item)

// const product = (Item)=>{
//  const v= Item.map((elem,index)=>({...elem , quntity: 0}));
// console.log(v);
// }


    useEffect(() => {
        dispatch(getCardsAsync());
        
    }, [])
    
const AddCartData=useSelector((state)=>state.carts);
console.log(AddCartData);


    const send =(e)=>{
console.log(e)
dispatch(addCart(e));
    };

    
    
    let itemlist="....loading";
    if(Item){
        itemlist=Item.map((item,index)=>(
            
            <div key={index} className='Card-page mx-4 my-4  ' >



    <Card style={{ width: '320px', height:"480px" }}>
      <Card.Img variant="top" src={item.thumbnail}  height="250px"/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={{fontSize:"13px"}}>
          {item.description}
        </Card.Text>
        <h6>price: ₹ {item.price}</h6>
    <br />
              <div className='button d-flex justify-content-center '> <Button variant="primary" className='col-lg-12' onClick={()=> send(item)}>Add to cart </Button></div>

      </Card.Body>
    </Card>


            </div>
        ))
    }

  return (
    <div className=' w-100 d-flex flex-wrap  '>{itemlist}</div>
  )
}

export default Home
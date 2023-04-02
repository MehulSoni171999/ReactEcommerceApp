import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {BsFillTrashFill} from "react-icons/bs";
      import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCart, deleteCart, decrementCart } from '../Stor/action/Action';


const CartDetails = () => {

  const [Data, setData] = useState([]);
// const [quantity, setquantity] = useState(0)

  const dispatch= useDispatch();
  const {id} = useParams();
  console.log(id)


  
  const AddCartData=useSelector((state)=>state.carts.carts);
  console.log(AddCartData);

  const compare =()=>{
     let  getData = AddCartData.filter((ele)=>{
             return ele.id==id
          
  });
   setData(getData)  
  };
// console.log(Data)
// const Quntity =()=>{
//   let qunt= 0;
// setquantity(qunt);
// };
// console.log(quantity);


  useEffect(() => {
    
compare();
//  Quntity(); 
    
  }, [id])
  
  const history = useNavigate();


  const send =(elem)=>{
    console.log(elem)
    dispatch(addCart(elem));
        };

        
  const decrement =(elem)=>{
    console.log(elem)
    dispatch( decrementCart(elem));
        };
    console.log(decrement)

  const DeleteHandler= (id)=>{
    dispatch(deleteCart(id))
    console.log(id)
    history("/")
};
 console.log(Data)


console.log(AddCartData)


  return (
    <>
    <div className="container mt-2">
      <h2 className='text-center'>Iteams Details page</h2>
    </div>
    
    <div className='container mt-4 mx-1 w-100 d-flex flex-wrap ' >

      {
      AddCartData.map((elem)=>{
        return(
          <>
            <div className="details-img" >

    
        <img src={elem.thumbnail} alt="" width="300px" height="280px"/>
      </div>

      <div className="details">



    <Table  className='mx-3 my-4'  >
    
        <tr>
        <td>
          <p><strong>Category</strong> : {elem.category}</p>
          <p><strong>Brand</strong> : {elem.brand}</p>
          <p><strong>title</strong> : {elem.title}</p>
          <p><strong>Total</strong> : ₹ {elem.price*elem.quantity}</p>
        </td>
        <td>
          <p ><strong>Rating</strong> : <span style={{backgroundColor:"green",color:"whitesmoke",borderRadius:"5px"}}> {elem.rating } *</span></p>
          <p><strong>stock</strong> : {elem.stock}</p>
          <p><strong>DiscountPercentage</strong> : {elem.discountPercentage}</p>
<br />
          <p><strong>remove</strong> : <BsFillTrashFill style={{color:"red",cursor:"pointer"}} onClick={()=>DeleteHandler(elem.id)}></BsFillTrashFill></p>
        
         
          <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width:200, cursor:"pointer",backgroundColor:"#dadada" , }}>
          Quantity :  <span style={{fontSize:"28"} } onClick={elem.quantity <=1?()=>DeleteHandler(elem.id) : ()=> decrement(elem)}>-</span>
        <span style={{fontSize:"22"}}> {elem.quantity}</span>

        <span style={{fontSize:"24"}} onClick={()=>send(elem)}>+</span>
        
       </div> 

        </td>
        </tr>
   
   
    </Table>



      </div>
          </>
        )
      })
    }

    </div>
    </>
  )
}

export default CartDetails
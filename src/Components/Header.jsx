import {React,useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartCheckFill ,BsEmojiFrown,BsFillXCircleFill} from 'react-icons/bs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NavLink } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { addCart, deleteCart } from '../Stor/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa'



const Header = () => {
const [Price, setPrice] = useState();

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const AddCartData=useSelector((state)=>state.carts.carts);
// console.log(AddCartData);

const DeleteHandler= (id)=>{
    dispatch(deleteCart(id))
    console.log(id)
};

const total = ()=>{
    let price=0;
      AddCartData.map((elem)=>{
         price= elem.price*elem.quantity + price
    });
    setPrice(price);
};
// console.log(Price);


useEffect(() => {
  
    total();

  
}, [total])
// console.log(Price)
        return (
            <>
                <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                    <Container>
                        <NavLink to="/" className="text-decoration-none text-light mx-4   ">Add Cart</NavLink>
                        <Nav className="me-auto">
                            <NavLink className="text-decoration-none text-light" to="/">Home</NavLink>
                        </Nav>

                        <Badge badgeContent={AddCartData.length} color="primary" 
                           id="basic-button"
                           aria-controls={open ? 'basic-menu' : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}>
                            <BsFillCartCheckFill style={{ color: 'white', fontSize: '25px', cursor:"pointer" }}  > </BsFillCartCheckFill>
                        </Badge>



                    </Container>
                    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
    
    
    {AddCartData.length ?
     <div className='add-cart-flesh mx-4'style={{width:"400px" , }} >
<Table  >
    <thead >
        <tr>
            <th>Product</th>
            <th>details</th>
        </tr>
        <BsFillXCircleFill onClick={handleClose} style={{position:"absolute" ,top:"2px",right:"15px" ,cursor:"pointer",margin:"3px" }} />
    </thead>

    <tbody>
        {
            AddCartData.map((item)=>{
                return(
                    <>
                    
                    <tr>
                        <NavLink to={`/cart/${item.id}` } onClick={handleClose}>
                        <td>
                            <img src={item.thumbnail} alt="" srcset="" width="150px" height="100px" />
                        </td>
                        </NavLink>
                        <td>
                            <p>{item.title}</p>
                            <p>price: ₹ {item.price}</p>
                            <p>Quantity:{item.quantity}</p>
                                {/* <p><FaTrash className=' fas fa-trash smalltrash' style={{color:"red"}}></FaTrash></p> */}
                        </td>
                        <p><FaTrash className='fas fa-trash largetrash' style={{color:"red" ,marginRight:"50px", cursor:"pointer"}} onClick={()=>DeleteHandler(item.id)}></FaTrash></p>
                    </tr>
                    
                    </>
                )
            })
        }
        <p>Total: ₹ {Price}</p>
    </tbody>
</Table>
    </div>:    <div className='cart-details' >
        <BsFillXCircleFill onClick={handleClose} style={{position:"absolute" ,top:"2px",right:"15px" ,cursor:"pointer" }} /><p className='mx-4 my-3'>your cart is empty  <BsEmojiFrown  style={{fontSize:"20px"}}/></p> </div>
}

      </Menu>
                </Navbar>

            </>


        )
    }

    export default Header
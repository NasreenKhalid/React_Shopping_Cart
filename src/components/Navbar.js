import React from 'react'
import '../styles/Navbar.css'


const Navbar = ({size,setShow}) => {
  return (
    <div className='nav_box'>
        <span className='my_shop' onClick={()=>setShow(true)}>
            My Shopping
          
        </span>
        <div className='cart' onClick={()=>setShow(false)}>
        <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
           </div>
        <span>{size}</span>
    </div>
  )
}

export default Navbar
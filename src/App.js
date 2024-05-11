import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import Amazon from './components/Amazon'
import './styles/Amazon.css'
import './App.css';

const App = () => {

  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([])
  const [warning,setWarning]=useState(false)

const handleClick = (item ) =>{
  console.log("i m clicked")
  console.log(item)
  let isPresent = false;
  cart.forEach((product)=>{
    if(item.id===product.id)
      isPresent = true;
  })
   if(isPresent){
    setWarning(true)
setTimeout(()=>{
  setWarning(false)
},2000)
   } 
  setCart([...cart, item])
}


const handleChange = (item, d) =>{
  let ind = -1;
  cart.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = cart;
  tempArr[ind].amount += d;
  
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCart([...tempArr])
}

  return (
    <React.Fragment>
     
		<Navbar size={cart.length} setShow={setShow}/>
    {show ? <Amazon handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
    
    
    {
      warning && <div className='warning'>This item is already added to cart</div>
    }
    
	</React.Fragment>
  );
}

export default App;

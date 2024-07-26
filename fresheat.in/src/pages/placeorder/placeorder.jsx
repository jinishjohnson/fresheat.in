import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'


const placeorder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className="container">
   <form action="" className="place-order row  ">
    <div className="place-order">
      <div className="place-order-left col-sm-12 ">
         <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" name="" id="" placeholder='First name'/>
            <input type="text" name="" id="" placeholder='Last name'/>
          </div>
          <input type="email" name="" id="" placeholder='Email address'/>
          <input type="text" name="" id="" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" name="" id="" placeholder='City'/>
            <input type="text" name="" id="" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" name="" id="" placeholder='Zip code'/>
            <input type="text" name="" id="" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right col-sm-12 ">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <hr />
            <button className='checkout' >PROCEED TO PAYMENT</button>
           </div>

      </div>
    </div>
   </form>
   </div>
  )
}

export default placeorder
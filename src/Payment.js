import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements= useElements()

    const handleSubmit = e => {

    }
    const handleChange = e => {
      
    }
    return (

      <div className="payment">
          <div className="payment__container">
            <h1>
              CheckOut {
                <Link to="/checkout">({basket?.length} items)</Link>
                }
            </h1>

            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__adress">
                <p>{user?.email}</p>
                <p>How you doin</p>
                <p>istanbul, TR</p>
              </div>
            </div>

            
            <div className="payment__section">
              <div className="payment__title">
                <h3>Review items and delivery</h3>
              </div>
              <div className="payment__items">
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>

            
              <div className="payment__section">
                <div className="payment__title">
                  <h3>Payment Method</h3>
                </div>
              
                <div className="payment__details">
                  <form onSubmit={handleSubmit}>
                    <CardElement onChange ={handleChange}/>
                  </form>
                </div>
              </div>
          </div>
      </div>
    
    )
}

export default Payment

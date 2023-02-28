import React, { useContext } from 'react';
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import AppContext from '../context/AppContext';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate()

  const paypalOtions = {
    clientId: 'access_token$sandbox$ctmsrnnnwt7k647s$59040e872b981459e0b4bf86a89113a1',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout:'vertical',
    shape:'rect'
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLITED'){
      const newOrder = {
        buyer,
        product: cart,
        payment:data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider>
            <PayPalButtons
             paypalOptions={paypalOtions}
             buttonStyles={buttonStyles}
             amount={handleSumTotal()}
             onPaymentStart={() => console.log('start payment')}
             onPaymentSuccess={data => handlePaymentSuccess(data)}
             onPaymentError={error => console.log(error)}
             onPaymentCancel={data => console.log(data)}
             />    

          </PayPalScriptProvider>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;
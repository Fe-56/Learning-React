// onChange event handler

import React, {useState} from 'react';

function Name(){
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

   const handleNameChange = (event) => {
    setName(event.target.value);
   }

   const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
   }

   const handleCommentChange = (event) => {
    setComment(event.target.value);
   }

   const handlePaymentChange = (event) => {
    setPayment(event.target.value);
   }

   const handleShippingChange = (event) => {
    setShipping(event.target.value);
   }

   return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name} </p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>
      <textarea 
        value={comment} 
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="giftcard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        Pick up
        <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}></input>
      </label>
      <label>
        Delivery
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
      </label>
      <p>Shipping: {shipping}</p>
    </div>
   )
}

export default Name;
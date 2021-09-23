import React, { useState } from 'react'
import Confirm from './confirm';
import "./form.css"

function Form(){

  const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="formInfo">
        <h2><u>Travel Details </u></h2>
          <label className="checkIn">
            Check In : 
            <input type="date" required></input>
          </label>
          <br/>
          <label className="checkOut">
            Check Out :  
            <input type="date" required></input>
          </label>
          <br/>
          <label className="numTravellers">
            No. of Travellers : 
            <input type="number" placeholder="Total Travellers (e.g. 4)" required></input>
          </label>
          <br/>
          <label className="numChildren">
            No. of Childrens : 
            <input type="number" placeholder="Total Childrens (e.g. 1)" required></input>
          </label>
          <br/>
          <button className="confirmBook" onClick={() => setIsOpen(true)}>Confirm Booking</button>
          <Confirm open={isOpen} onClose={() => setIsOpen(false)}>
            Booking Confirmed
          </Confirm>
      </div>
    );
}

export default Form

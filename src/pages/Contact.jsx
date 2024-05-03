import React from "react";
import "./contact.css";

export default function Contact() {
  return (

    <div>
      <h2>Contact Us</h2>
      <div className="form">
      <form className="form1">
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
           
            required
          />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input style={{"marginLeft":"39px"}}
            type="email"
            id="email"
            name="email"
          
            required
          />
        </div>
        <div>
          <label htmlFor="question">Ask Your Question:</label>
          <textarea
            id="question"
            name="question"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      </div>
    </div>
  );
}

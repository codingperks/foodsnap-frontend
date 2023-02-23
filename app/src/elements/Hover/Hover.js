import React from 'react'
import './Hover.css'

function Hover() {
  return (
    <div className="HoveringPage">
      <div className="HoveringPageContent">
          <h3>Welcome to FoodSnap!</h3>
          <p>FoodSnap is a progressive web app that allows you to upload/take a picture of a food item to estimate its nutritional value.
            To get started, upload a picture of your food.</p>
          <button className="CloseButton">X</button>
      </div>
    </div>
    );
}
  
  export default Hover

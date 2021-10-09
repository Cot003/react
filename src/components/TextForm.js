import React, { useState } from "react";

export default function TextForm(props) {

  // setText("New Text");
  const handleUpClick = ()=> {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  function handleOnChange(event) {
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <div>

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary"  onClick={handleUpClick}>Convert To UpperCase</button>
    </div>

  );
}

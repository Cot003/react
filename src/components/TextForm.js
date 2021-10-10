import React, { useState } from "react";

export default function TextForm(props) {

  // setText("New Text");
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handleLoClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }
  function handleOnChange(event) {
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p> {text.split(" ").length} words {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length}minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
      </>

  );
}

import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  function handleOnChange(event) {
    // console.log("On change")
    setText(event.target.value)
  }

  function handleUpperClick() {
    let newText = text.toUpperCase();
    let paraWords = text.split(" ")
    console.log(paraWords)
    setText(newText);

    // console.log("Button Of Uppercase was Clicked")
  }
  return (
    <>
    <div className = "container">
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
    <textarea onChange={handleOnChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick = {handleUpperClick}>Convert to UpperCase</button></div>
  
  <div className = "container">
    <h2>Paragraph Summary</h2>
    <p>Words in Paragraph: {text.split(" ").length} , Characters in Paragraph: {text.length}</p>
  </div>
  </>
  )
}

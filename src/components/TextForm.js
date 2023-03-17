import React from 'react'

export default function TextForm(props) {
  return (
    <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary">Convert to UpperCase</button></div>
  )
}

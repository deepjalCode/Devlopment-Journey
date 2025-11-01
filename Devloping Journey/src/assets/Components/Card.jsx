import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image}  />
      <h1>{props.User},{props.Age}</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <button>Follow</button>
    </div>
  )
}
export default Card
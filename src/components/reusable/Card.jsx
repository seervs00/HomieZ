import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
      <div className='card'>
        <div className='img-container'>
        <img className='c-image' src={props.image} alt='popular house image'/>
        </div>

        <div className='text-card'>
        <span className='c-price'> <span className='card-price'>$</span>{props.price}</span>
         <span className='c-name'> {props.name}</span>
         <span className='c-detail'> {props.detail}</span>
         <span  className='c-description'> {props.description} </span>

        </div>
        
       
         
      </div>
  )
}

export default Card
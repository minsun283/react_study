import React from 'react'

const Box = (props) => {
  return (
    <div className='box-deco'>
      <h3>{props.title}</h3>
      <img className='img-size' src={props.item &&props.item.img}></img>
      <h3>WIN</h3>
      </div>
  )
}

export default Box
import React from 'react'

const Total = ({name,price}) => {
  return (
    <div className=" my-3 flex justify-between">
    <p>{name}</p>
    <p>${price}</p>
  </div>
  )
}
export default Total

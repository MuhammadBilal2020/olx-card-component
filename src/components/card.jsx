import React from 'react'

function Card({image ,price , title , place , time}) {
  return (
   <>
   



<div className="card bg-base-100 w-96 shadow-xl p-2">
  <figure className='fig p-1'>
    <img className='i-w'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body  bg-white text-black p-2">
    <h2 className="card-price  mt-1">
      {price}

    </h2>
    <p className='mt-1 h-[3rem]'>{title}</p>
    <p className='mt-1'>{place}</p>
    <p>{time}</p>

    
  </div>
</div>



   </>
  )
}

export default Card
import React from 'react'

function Card({username = "None"}) { //can add few props to the component

  return (
    <div>
        <h1 className='text-3xl font-bold underline text-center text-yellow-500'>
            Hello Lorem Ipsum chetam ejje !
            <p className='text-blue-500'>Props {username}</p>
        </h1>
    </div>
  )
}

export default Card
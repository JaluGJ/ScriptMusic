import React from 'react';


function Loading() {
    const image = 'https://media0.giphy.com/media/rypIwxQ2VDTzifwhWD/giphy.gif?cid=790b76118f9d66ad10ba297ada43bb984b6d34e687ad5de4&rid=giphy.gif&ct=g'

  return (
    <img src={image} alt="asd" className='loading' />
  )
}

export default Loading

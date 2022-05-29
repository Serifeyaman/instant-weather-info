import React from 'react'
import notFound from 'assets/images/404.png'

const NotFound = () => {
  return (
    <div className='main-div'>
      <img src={notFound} width={"50%"} />
    </div>
  )
}

export default NotFound

import './Story.css'
import React from 'react'
import  {Avatar}  from '@material-ui/core'




function Story  ({image,profileSrc,title }) {
  console.log(image)
  console.log(profileSrc)

  return (
    <div className='Story'style={{ backgroundImage: `url(${image})` }} >
      <Avatar className='Avatar' src ={profileSrc} />
      
          <h4>{title}</h4>
    </div>
  )
}

export default Story
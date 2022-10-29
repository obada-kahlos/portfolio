import React from 'react'
import ViewImage from '../../ViewImage/ViewImage'

const Image = ({src , alt , className}) => {
  return (
      <img src={src} alt={alt} className={className} />
  )
}

export default Image
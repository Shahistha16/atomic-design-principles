import * as React from 'react'

const Image = (imagePath, width, height, alt) => (
  <img src={imagePath} width={width} height={height} alt={alt} />
)

export default Image

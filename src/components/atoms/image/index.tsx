import * as React from 'react'
import { Interface } from 'readline'

export interface imageInterface {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const Image = ({ src, width, height, alt }: imageInterface) => (
  <img src={src} width={width} height={height} alt={alt} />
)

export default Image

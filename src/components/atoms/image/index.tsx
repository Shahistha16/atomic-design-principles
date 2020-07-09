import * as React from 'react'
import { Interface } from 'readline'

export interface imageInterface {
  src: any;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const Image = ({ src, width, height, alt }: imageInterface) => (
  <img src={src} width={width} height={height} alt={alt} />
)

export default Image

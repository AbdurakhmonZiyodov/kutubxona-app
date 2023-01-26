import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {ViewStyle} from 'react-native'

interface ArrowRightProps {
  color: string
  width: number
  height?: number
  style?: ViewStyle
}

const ArrowRight = ({color, width, height, style}: ArrowRightProps) => {
  const path =
    // eslint-disable-next-line max-len
    'M0.292893 0.792893C-0.0976315 1.18342 -0.0976315 1.81658 0.292893 2.20711L5.58579 7.5L0.292893 12.7929C-0.0976315 13.1834 -0.0976315 13.8166 0.292893 14.2071C0.683417 14.5976 1.31658 14.5976 1.70711 14.2071L7.70711 8.20711C8.09763 7.81658 8.09763 7.18342 7.70711 6.79289L1.70711 0.792893C1.31658 0.402369 0.683417 0.402369 0.292893 0.792893Z'
  if (!height) height = width * 1.875
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 8 15">
      <Path fillRule="evenodd" d={path} fill={color} />
    </Svg>
  )
}

export default ArrowRight

import {curveLinear, curveLinearClosed} from 'd3-shape'

import createPathContext from './pathContext.js'
var PathContext = createPathContext(curveLinear, curveLinearClosed)

export default function (context) {
  return new PathContext(context)
}

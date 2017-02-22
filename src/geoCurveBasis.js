import {curveBasis, curveBasisClosed} from 'd3-shape'

import createPathContext from './pathContext.js'
var PathContext = createPathContext(curveBasis, curveBasisClosed)

export default function (context) {
  return new PathContext(context)
}

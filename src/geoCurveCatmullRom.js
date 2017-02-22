import {
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCardinal,
  curveCardinalClosed
} from 'd3-shape'

import createPathContext from './pathContext.js'

export default (function custom (alpha) {
  var PathContext = alpha
    ? createPathContext(curveCatmullRom.alpha(alpha), curveCatmullRomClosed.alpha(alpha))
    : createPathContext(curveCardinal.tension(0), curveCardinalClosed.tension(0))

  function catmullRom (context) {
    return new PathContext(context)
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha)
  }

  return catmullRom
})(0)

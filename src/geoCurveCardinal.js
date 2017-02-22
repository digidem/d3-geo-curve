import {curveCardinalClosed, curveCardinal} from 'd3-shape'

import createPathContext from './pathContext.js'

export default (function custom (tension) {
  var PathContext = createPathContext(curveCardinal.tension(tension), curveCardinalClosed.tension(tension))
  function cardinal (context) {
    return new PathContext(context)
  }

  cardinal.tension = function (tension) {
    return custom(+tension)
  }

  return cardinal
})(0)

import {path} from 'd3-path'

var tau = Math.PI * 2

export default function createPathContext (lineCurveFactory, polygonCurveFactory) {
  function PathContext (context) {
    this._init(context)
  }

  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function (_) {
      this._radius = _
      return this
    },
    polygonStart: function () {
      this._line = 0
    },
    polygonEnd: function () {
      this._line = NaN
    },
    lineStart: function () {
      this._point = 0
      if (this._line === 0) {
        this._polygonCurve.lineStart()
      } else {
        this._lineCurve.lineStart()
      }
    },
    lineEnd: function () {
      if (this._line === 0) {
        this._polygonCurve.lineEnd()
      } else {
        this._lineCurve.lineEnd()
      }
      this._point = NaN
    },
    point: function (x, y) {
      if (this._point === 0) {
        if (this._line === 0) {
          this._polygonCurve.point(x, y)
        } else {
          this._lineCurve.point(x, y)
        }
      } else {
        this._context.moveTo(x + this._radius, y)
        this._context.arc(x, y, this._radius, 0, tau)
      }
    },
    result: function () {
      if (!this._svg) return
      var buf = this._context.toString()
      this._init()
      return buf
    },
    _init: function (context) {
      this._context = context == null ? (this._svg = true, path()) : context
      this._lineCurve = lineCurveFactory(this._context)
      this._polygonCurve = polygonCurveFactory(this._context)
    }
  }

  return PathContext
}

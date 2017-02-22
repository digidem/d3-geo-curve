import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  format: 'umd',
  moduleName: 'd3',
  globals: {
    'd3-geo': 'd3',
    'd3-path': 'd3'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false  // Default: true
    })
  ]
}

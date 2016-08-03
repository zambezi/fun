import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

export default {
  entry: 'src/index.js',
  dest: 'dist/fun.js',
  format: 'umd',
  moduleName: 'fun',
  external: [ ],
  sourceMap: true,
  plugins: [ babel(babelrc()) ],
  globals: { }
}

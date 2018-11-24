import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/time-alias.min.js',
    name: 'time-alias',
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      output: { comments: false },
      compress: { warnings: false }
    }),
  ],
};
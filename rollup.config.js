import plugin from "postcss-modules-values";
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'


export default {
    input: './index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },
    watch:{
        exclude: 'node_modules/**'
    },
    plugins: [
      styles(),
      image({
        limit: 100000000000
      }),
      babel({
         babelHelpers: 'bundled' 
        }),
      serve({
        open: true,
        contentBase: './',
        port: 8000
        }
      ),
      livereload()

    ]
  };
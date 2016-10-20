// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'browser/index.js',
    dest: 'build/hapi-router.js',
    format: 'umd',
    moduleName: 'HAPIRouter',
    sourceMap: true,
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
    ]
}
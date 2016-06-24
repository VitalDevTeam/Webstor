module.exports = {
    dist: {
        options: {
            transform: [['babelify', {
                presets: ['es2015', 'react'],
                plugins: ['add-module-exports']
            }]]
        },
        files: [{
            expand: true,
            cwd: 'src/js/local/',
            src: '**/index.js',
            dest: 'tmp/js/'
        }]
    }
}

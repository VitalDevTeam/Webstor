module.exports = {
	distFirstPass: {
		src: ['src/js/lib/**/*.js', 'src/js/local/modules/**/*.js'],
		dest: 'tmp/js/modules.js'
	},
	distSecondPass: {
		src: ['tmp/js/**/*.js'],
		dest: 'dist/assets/js/scripts.js'
	}
};
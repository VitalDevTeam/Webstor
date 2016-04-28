module.exports = {
	options: { livereload: true },
	scripts: {
		files: ['src/js/local/**/*.js'],
		tasks: ['js']
	},
	css: {
		files: ['src/sass/**/*.scss'],
		tasks: ['css']
	},
	content: {
		files: ['src/content/**/*'],
		tasks: ['copy']
	}
};
var gulp = require("gulp"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	postcssimport = require("postcss-import"),
	mixins = require("postcss-mixins");
	
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([postcssimport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorMessage) {
			console.log(errorMessage.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});
var gulp = require("gulp"), 
	watch = require("gulp-watch"), 
	postcss = require("gulp-postcss")
	autoprefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	postcssimport = require("postcss-import");

gulp.task('default', function() {
	console.log("Gulp task was created...");
});

gulp.task('html', function() {
	console.log("index.html was modified!");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([postcssimport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});
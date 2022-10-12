const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
	return src('Metydas/**/*.scss')
		.pipe(sass())
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(dest('css'));
}

function watchTask() {
	watch(['Metydas/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);

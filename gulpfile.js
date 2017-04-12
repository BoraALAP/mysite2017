const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
  	.pipe(sourcemaps.init())
  .pipe(sass({style: 'expanded'}))
  	.pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
});

gulp.task("sass:watch", () => {
  gulp.watch("scss/*.scss", ["sass"])
})


const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('sass', function() {
  gulp.src('scss/style.scss')
  .pipe(sass({style: 'expanded'}))
  
  .pipe(gulp.dest('css'))
});

gulp.task("sass:watch", () => {
  gulp.watch("scss/*.scss", ["sass"])
})
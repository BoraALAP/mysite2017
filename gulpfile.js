const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass({style: 'compressed'}))
  	.pipe(cleanCSS({compatibility: 'ie8'}))
  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))  	
    .pipe(sourcemaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task("watch", () => {
  livereload({ start: true });
  gulp.watch("scss/**/*.scss", ["sass"]);

})


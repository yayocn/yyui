var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
  gulp.src('css/flyimt.css')
    .pipe(gulp.dest('dist/css/'));
})

gulp.task('sourcemap', function() {
  gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('flyimt.min.js'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('concatjs', function() {
  gulp.src('js/*.js')
    .pipe(concat('flyimt.js'))
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('uglifyjs', function() {
  gulp.src('js/*.js')
    .pipe(concat('flyimt.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('default', ['css','sourcemap','concatjs','uglifyjs']);
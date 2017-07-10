var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');

//
// css
//

// compress the css file.
//
gulp.task('minifier', function() {
  return gulp.src('css/yyui.css')
    .pipe(concat('yyui.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('css/dist/'))
    .pipe(gulp.dest('dist/css/'))
})

// create css for distribution
//
gulp.task('distCss', ['minifier'], function() {
  return gulp.src('css/yyui.css')
    .pipe(gulp.dest('dist/css/'))
})


//
// js
//

// Connect the js file in `js` folder
//
gulp.task('concatJsAll', function() {
  return gulp.src('js/*.js')
    .pipe(concat('yyui.js'))
    .pipe(gulp.dest('js/dist/'));
})

// Compress the connected js
//
gulp.task('uglify', ['concatJsAll'], function() {
  return gulp.src('js/dist/yyui.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/dist'));
})

// create sourcemap.
// it will create the complete and compressed file.
gulp.task('sourcemap',['concatJsAll', 'uglify'], function() {
  gulp.src('js/dist/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../js/dist/'))
    .pipe(gulp.dest('js/dist/'))
})

// create js for distribution.
//
gulp.task('distJs', ['uglify'], function() {
  return gulp.src('js/dist/yyui.js')
    .pipe(rename('yyui.min.js'))
    .pipe(gulp.dest('dist/js/'))
})

// Produce
// create distribution folder
//

gulp.task('produce',['distJs', 'distCss'], function() {
  gulp.src('jquery-1.12.4.min.js')
    .pipe(rename('jquery.min.js'))
    .pipe(gulp.dest('dist/js'));
})

//gulp.task('default', ['css','sourcemap','concatjs','uglifyjs']);
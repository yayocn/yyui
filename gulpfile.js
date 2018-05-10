var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');

var VERSION = '2.0.0';

//
// css
//

// compress the css file.
//
gulp.task('minifier', function() {
  return gulp.src('css/yyui.css')
    .pipe(rename('yyui.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(concat('yyui.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('css/dist/'))
    .pipe(rename('yyui.min.css'))
    .pipe(gulp.dest('dist/css/'));
})


//
// js
//

// Connect the js file in `js` folder
//
gulp.task('concatJsAll', function() {
  return gulp.src([
    'js/util.js',
    'js/button.js',
    'js/collapse.js',
    'js/alert.js',
    'js/tab.js',
    'js/carousel.js',
    'js/dropdown.js',
    'js/modal.js',
    'js/tooltip.js',
    'js/popover.js',
    'js/scrollspy.js'
  ])
    .pipe(concat('yyui.js'))
    .pipe(gulp.dest('js/dist/'))
    .pipe(rename('yyui.js'))
    .pipe(gulp.dest('dist/js/'));
})

// Compress the connected js
//
gulp.task('uglify', ['concatJsAll'], function() {
  return gulp.src('js/dist/yyui.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/dist'))
    .pipe(rename('yyui.min.js'))
    .pipe(gulp.dest('dist/js/'));
})

// create sourcemap.
// it will create the complete and compressed file.
gulp.task('sourcemap',['concatJsAll', 'uglify'], function() {
  gulp.src('js/dist/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../js/dist/'))
    .pipe(gulp.dest('js/dist/'))
})

// Produce
// create distribution folder
//

gulp.task('build',['uglify', 'minifier'], function() {
  gulp.src('lib/jquery-1.12.4.min.js')
    .pipe(rename('jquery.min.js'))
    .pipe(gulp.dest('dist/js'));

  gulp.src('lib/popper.min.js')
    .pipe(gulp.dest('dist/js'));
})

//gulp.task('default', ['css','sourcemap','concatjs','uglifyjs']);
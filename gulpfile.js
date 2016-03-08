var gulp = require('gulp');

gulp.task('css', function() {
  gulp.src('css/flyimt.css')
    .pipe(gulp.dest('dist/css/'));
})

gulp.task('default', ['css']);
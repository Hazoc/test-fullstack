const gulp = require('gulp');
const requireDir = require('require-dir');
const uglify = require('gulp-uglify');
const less = require("gulp-less");

requireDir('./tasks');

gulp.task('default', ['browser-sync', 'js', 'css'], function () {    
    
});

gulp.task('js', function() {
    gulp.src(['../app/**/*.js'])
      .pipe(uglify())
      .pipe(gulp.dest('../dist'))
  });

  gulp.task('css', function() {
    gulp.src(['../app/**/*.less'])
      .pipe(less())
      .pipe(gulp.dest('../dist'))
  });
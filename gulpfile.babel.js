import gulp from "gulp";
import browserify from "browserify";
import fs from "fs";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import gutil from 'gulp-util';

gulp.task('build', () => {
  browserify('./src/main.js')
    .transform('babelify', {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream('./dist/index.js'));
});

gulp.task('default', () => {
  browserify({
    entries: 'src/utils.js',
    debug: true
  })
  .transform('babelify', {presets: ["es2015"]})
  .bundle()
  .on('error', err => {
    gutil.log("browserify Error", gutil.colors.red(err.message));
  })
  .pipe(source('utils.js'))
  .pipe(buffer())

  .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
  .pipe(sourcemaps.write("./maps"))
  .pipe(gulp.dest('./dist'));
});

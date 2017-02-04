import gulp from "gulp";
import browserify from "browserify";
import fs from "fs";

gulp.task('build', () => {
  browserify('./src/main.js')
    .transform('babelify', {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream('./dist/index.js'));
});

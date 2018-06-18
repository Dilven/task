const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];

 
gulp.task('styles', () =>
  gulp.src('style.css')
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(gulp.dest('build'))
);

gulp.task('watch', () => {
  gulp.watch('style.css', ['styles'])
})
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const files = ['./config/*.js', './controllers/*.js', './persistencia/*.js', './processor/*.js',
'./routes/*.js', './servicos/*.js', './test/*.js', './validacao/*.js',
'./index.js'];

gulp.task('lint', () => {
  gulp.src(files)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

const cliente = function(){
  gulp.run('lint');
};

gulp.task('default', () => {
  gulp.watch(files, cliente);
});

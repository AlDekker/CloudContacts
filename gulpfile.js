//Settings
var baseFolder = 'app',
    buildFolder = 'dist';

//Plugins
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    minCss        = require('gulp-clean-css'),
    imagemin      = require('gulp-imagemin'),
    cache         = require('gulp-cache'),
    clean         = require('gulp-clean'),
    rename        = require('gulp-rename'),
    svgSprite     = require('gulp-svg-sprite'),
    svgmin        = require('gulp-svgmin'),
    cheerio       = require('gulp-cheerio'),
    replace       = require('gulp-replace');


//Styles
gulp.task('sass', function(){
  return gulp.src(baseFolder+'/sass/**/*.sass')
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
   browsers: ['last 15 versions'],
   cascade: false
  }))
  .pipe(gulp.dest(baseFolder+'/css'))
  .pipe(browserSync.reload({stream: true}))
});

//Scripts
gulp.task('js', function(){
  return gulp.src([
    baseFolder+'/js/common.js'
  ])
  .pipe(browserSync.reload({stream: true}))
});


//HTML
gulp.task('html', function() {
	return gulp.src(baseFolder+'/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

//BrowserSync
gulp.task('browserSync' , function(){
  browserSync({
    server: {
      baseDir: baseFolder
    },
    notify: false,
    // tunnel: true,
    // tunnel: "project"
  });
});

//Watch
gulp.task('watch', function(){
  gulp.watch(baseFolder+'/sass/**/*.sass', gulp.parallel('sass'));
  gulp.watch([baseFolder+'/js/**/*.js', '!'+baseFolder+'/js/*.min.js',], gulp.parallel('js'));
  gulp.watch(baseFolder+'/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('watch', 'sass', 'js', 'browserSync'));


gulp.task('build', function(){

  gulp.src(baseFolder+'/img/**/*').pipe(gulp.dest('dist/img'));
  gulp.src(baseFolder+'/css/**/*').pipe(gulp.dest('dist/css'));
  gulp.src(baseFolder+'/js/**/*').pipe(gulp.dest('dist/js'));
  gulp.src(baseFolder+'/*.html').pipe(gulp.dest('dist'));

});

gulp.task('buildClear', function(){
  gulp.src('dist')
  .pipe(clean());
});



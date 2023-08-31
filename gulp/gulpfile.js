const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function compileSass() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/css'))
}
function adaptHtml() {
    return gulp.src('./src/*.html')
    .pipe(useref({noAssets: true}))
    .pipe(gulp.dest('./dist'))
}

function buildJs() {
  return gulp.src('./src/scripts/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function optimizeImages() {
  return gulp.src('./src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}

function startLiveServer() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('./src/scss/*.scss', compileSass).on('change', browserSync.reload);
  gulp.watch('./src/*.html', adaptHtml).on('change', browserSync.reload);
  gulp.watch('./src/scripts/*.js', buildJs).on('change', browserSync.reload);
}

gulp.task('default', gulp.parallel(compileSass, adaptHtml, buildJs,optimizeImages,startLiveServer));
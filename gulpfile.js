const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// Sass
gulp.task('sass', function (done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Keep running gulp even though occurred compile error
        .pipe(postcss([
            autoprefixer({
                cascade: false
            })
        ]))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream:true}));
    done();
});

// Js-concat-uglify
gulp.task('js', function(done) {
    gulp.src(['js/**'])
        .pipe(uglify({
            output:{
                comments: /^!/ // Keep some comments
            }
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
    done();
});

// Imagemin
gulp.task('imagemin', function(done) {
    gulp.src(['images/**/*.{png,jpg,gif,svg}'])
        .pipe(imagemin({
            optimizationLevel: 7,
            use: [pngquant({
                quality: '60-80',
                speed: 1
            })]
        }))
        .pipe(gulp.dest('build/images'));
    done();
});


// Static server
gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            index  : 'index.html' // index file
        }
    });
    done();
});

// watch files
gulp.task('watch-files', function(done) {
  gulp.watch('sass/**/*.scss', gulp.task('sass'));
  gulp.watch('js/**', gulp.task('js'));
  gulp.watch('images/**', gulp.task('imagemin'));
  gulp.watch('*.html', gulp.task('bs-reload'));
  done();
});

// Reload all browsers
gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});

// Build
gulp.task('build', gulp.parallel('sass', 'js', 'imagemin'));

// Task for `gulp` command
gulp.task('default', gulp.series('browser-sync', 'watch-files', function(done){
    done();
    console.log('Default all task done!');
}));

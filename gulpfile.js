var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var runSequence = require('gulp-run-sequence');


gulp.task('jsx', function () {
    gulp.src('jsx/**')
        .pipe(react())
        .pipe(gulp.dest('src'));
});

gulp.task('scripts', function () {
    return gulp.src('./src/main.js', {
            read: false
        }).pipe(browserify())
        .pipe(gulp.dest('./build/'));

});

gulp.task('build', function (cb) {
    runSequence('jsx', 'scripts', cb);
});

gulp.task('default',['build'], function () {
    gulp.watch('./jsx/**', function (evt) {
        gulp.run('jsx', function () {

        });
    });

    gulp.watch('./src/**', function (evt) {
        gulp.run('scripts', function () {

        });
    });

});

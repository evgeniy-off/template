module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/static/less/**/*.less', $.gulp.series('less:dev'));
        $.gulp.watch('./dev/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./dev/static/img/general/**/*.{png,jpg,gif}',
                     './dev/static/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });
};
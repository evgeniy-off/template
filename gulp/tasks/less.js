module.exports = function () {
    $.gulp.task('less:build', () => {
        return $.gulp.src('./dev/static/less/main.less')
            .pipe($.gp.less({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    $.gulp.task('less:dev', () => {
        return $.gulp.src('./dev/static/less/main.less')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.less({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'less',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};

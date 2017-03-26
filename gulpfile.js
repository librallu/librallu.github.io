gulp = require('gulp');

var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var exec = require('child_process').exec;


/*
directories used by gulp for final output construction.
*/
var dest = 'dest/';
var pelican_in = 'pelican_in/';
var src = 'src/';
var tmp = 'tmp/';
var static_dir = 'static/';

/*
browser sync task
*/
gulp.task('serve', function() {
    browserSync.init({
        server: dest
    });

});


/*
populate tmp directory
*/
gulp.task('tmp-spectre', function() {
  gulp.src('bower_components/spectre.css/dist/spectre.min.css')
  .pipe(gulp.dest(tmp))
});

/** CSS part for the theme */
gulp.task('theme_css', function() {
    return gulp.src(src+"style/main.scss")
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(tmp));
});

/** style tmp into pelican_in style */
gulp.task('in_css', ['tmp-spectre', 'theme_css'], function() {
  return gulp.src(tmp+'*.css')
  .pipe(plugins.concat('style.min.css'))
  .pipe(gulp.dest(pelican_in+'/static/css'));
})

/** copy theme templates */
gulp.task('in_html', function() {
  return gulp.src(src+'*.html')
  .pipe(gulp.dest(pelican_in+'/templates/'));
});

/*
call pelican
*/
gulp.task('pelican', ['in_css', 'in_html'], function(cb) {
    exec('make html', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
  });
});

var gulp = require('gulp');
var serve = require('gulp-serve');
var nodemon = require('gulp-nodemon');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var inject = require('gulp-inject');


gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 443,
  https: true,
  middleware: function(req, res) {
    // custom optional middleware
  }
}));

gulp.task('start', function () {
  var nodemonOptions = {
    script: './server.js',
    delayTime: 1,
    ext: 'js html',
    env: {
      'PORT' : 3000,
      'NODE_ENV': 'development'
    }
  };
  return nodemon(nodemonOptions);
});

var server = {
  host: 'localhost',
  port: '3000'
}

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             'localhost',
      port:             '3000',
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('index', function () {
  var target = gulp.src('./public/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./public/src/**/**/*.module.js', './public/src/**/**/*.factory.js', './public/src/**/**/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./public'));
});

gulp.task('start-serve', ['webserver', 'openbrowser']);
gulp.task('start-server', ['start', 'index', 'openbrowser']);

import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import concat from 'gulp-concat'
import del from 'del'
import gulp from 'gulp'
import load from 'gulp-load-plugins'
import sass from 'gulp-sass'
import wiredep  from 'wiredep'

const $ = load()
const reload = browserSync.reload

gulp.task('styles', () => {
  gulp.src('app/styles/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('app/styles'))
  .pipe(gulp.dest('dist/styles'))
})

gulp.task('scripts', () => {
    return gulp.src('./app/scripts/back-up.js')
    .pipe(gulp.dest('app/scripts'))
    .pipe(concat('main.js'))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('app/scripts'))

  return gulp.src('app/scripts/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}))
})

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
}

gulp.task('lint', () => {
  return lint('app/scripts/*.js', {
    fix: true
  })
    .pipe(gulp.dest('app/scripts'))
})

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
})

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  })

  gulp.watch([
    'app/*.html',
    'app/styles/**/*.scss'
  ]).on('change', reload)

  gulp.watch('app/styles/**/*.scss', ['styles'])
  gulp.watch('app/scripts/**/*.js', ['scripts'])
  gulp.watch('app/fonts/**/*', ['fonts'])
  gulp.watch('bower.json', ['wiredep', 'fonts'])
})

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  })
})

gulp.task('clean', del.bind(null, ['.tmp', 'app/scripts/*.min.js', 'app/styles/main.css', 'dist']));

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras', 'serve'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build')
})

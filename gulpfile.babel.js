import gulp       from 'gulp';
import concat     from 'gulp-concat';
import del        from 'del';
import eslint     from 'gulp-eslint';
import load       from 'gulp-load-plugins';
import prefix     from 'gulp-autoprefixer';
import rename     from 'gulp-rename';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';

const $ = load();
const reload = sync.reload;

gulp.task('build', ['html', 'lint']);

gulp.task('clean', del.bind(null, ['index.html', 'style.css', 'app/assets/views/*', 'dist/views/*', 'dist/*.min.js'], {read: false}));

gulp.task('default', ['build', 'watch'], () => {
  gulp.start('serve');
});

gulp.task('html', ['scripts', 'styles'], () => {
  return gulp.src('app/*.html')
    .pipe(sourcemaps.init())
    .pipe($.useref({searchPath: ['app']}))
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('images', () => {
  return gulp.src('app/images/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/*', '!test/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('rebuild', ['clean', 'default']);

gulp.task('scripts', () => {
  return gulp.src('app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  });
});

gulp.task('styles', () => {
  gulp.src('app/css/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(prefix('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', ['html', reload])
    gulp.watch('app/css/**/*.*', ['styles', reload])
    gulp.watch('app/js/*.js', ['scripts', reload]);
});

/*function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask*/

  const {src, dest, parallel, series, watch} = require('gulp'); //один раз используем
  const brwSync = require('browser-sync').create();
  const sass = require('gulp-sass');
  const concat = require('gulp-concat');
  const imagemin = require('gulp-imagemin');
  const newer = require('gulp-newer');
  const del = require('del');
  const prefix = require('gulp-autoprefixer'); // подключаем автопрефексер
  const uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
  const cssmin = require('gulp-cssnano')
//const GulpClient = require('gulp');



  function browserSync() {
      brwSync.init({
          server: {baseDir: 'app/'},
          notify: false,
          online: true
      })
  }

  function styles() {
      return src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',  
        'app/styles/main.scss'
    ])
    .pipe(sass()).
     pipe(prefix())        // It`s the new!!! Home work!!!  
    .pipe(concat('main.min.css'))
    .pipe(cssmin())    
    .pipe(dest('app/styles/css'))
    .pipe(brwSync.stream())
        
  }

  function scripts() {
      return src([ // Берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Берем Magnific Popup
        'app/js/main.js' // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
		])
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(dest('app/js')) // Выгружаем в папку app/js
        .pipe(brwSync.stream()) // Триггерим Browsersync для обновления страницы*/
  }


  function watching() {
      watch('app/styles/**/*.scss', styles);
      watch('app/js/*.js', scripts);   // It`s the new!!! Home work!!!
      watch('app/index.html').on('change', brwSync.reload);
      
  }

  function minization() {
      return src('app/img/*')
      .pipe(newer('app/imgo'))
      .pipe(imagemin())
      .pipe(dest('app/imgo'))
  }

  function cleanimg() {
      return del('app/imgo/*', {force: true})
  }

  function build() {
      return src([
          'app/imgo/*',
          'app/styles/css/*',
          'app/**/*.html',
          'app/js/main.min.js'
      ], {base: 'app'})
      .pipe(dest('dist'))
  }

  exports.brwSync = browserSync;
  exports.styles = styles;
  exports.scripts = scripts;
  exports.watch = watching;
  exports.minimg = minization;
  exports.cleanimg = cleanimg;
  exports.build = build;

  exports.reopimg = series(cleanimg, minization);  
  exports.default  = parallel(styles, scripts, browserSync, watching)
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bs = require('browser-sync');
	reload = bs.reload;
	

gulp.task('watch', function(){
	
	bs.init({
		server: './'
	});
	
	gulp.watch('css/*.scss', ['sass']);
	gulp.watch('*.html', ['html']);
});

gulp.task('html', function(){
	return gulp.src('*.html')
		.pipe(gulp.dest('./'))
		.pipe(reload({stream: true}));
});

gulp.task('sass', function(){
	return gulp.src('css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css/'))
		.pipe(reload({stream: true}));
});

gulp.task('default', ['watch']);
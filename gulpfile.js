var gulp = require("gulp"),  
  deploy = require("gulp-gh-pages");

gulp.task('publish', function () {  
  return gulp.src("_book/**/*.*")
    .pipe(deploy({
      remoteUrl: "https://github.com/lynnhawk/magiccube.git"
    }))
    .on("error", function(err){
      console.log(err)
    })
});

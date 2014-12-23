module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/style.css' : 'css/sass/style.scss'
        }
      }
    },
    browserSync: {
        bsFiles: {
            src : [
              'css/*.css',
              '*.html'
          ]
        },
        options: {
            server: {
                baseDir: "./"
            },
            watchTask: true
        }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      html: {
        files: '*.html',
        tasks: ['html'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default',['browserSync','watch']);
}
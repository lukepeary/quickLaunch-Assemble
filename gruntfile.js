module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/style.css' : 'src/css/sass/style.scss'
        }
      }
    },
    browserSync: {
        bsFiles: {
            src : [
              'dist/css/*.css',
              'dist/*.html'
          ]
        },
        options: {
            server: {
                baseDir: "./dist"
            },
            watchTask: true
        }
    },
    assemble: {
      options: {
        layout: ['default.hbs'],
        layoutdir: 'src/templates/layouts',
        partials: ['src/templates/partials/*.hbs'],
        flatten: true
      },
      pages: {
          src: ['src/templates/pages/*.hbs'],
          dest: 'dist'
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
        files: '**/*.hbs',
        tasks: ['assemble']
      }
    },
    copy: {
      images: {
        expand: true,
        src: ['src/assets/images/**'],
        dest: 'dist/assets/images/',
        filter: 'isFile',
        flatten: true
      },
      fonts: {
        expand: true,
        src: ['src/assets/fonts/**'],
        dest: 'dist/assets/fonts/',
        filter: 'isFile',
        flatten: true
      },
      scriptLibs: {
        expand: true,
        src: ['src/js/vendor/**'],
        dest: 'dist/js/vendor',
        filter: 'isFile',
        flatten: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  // grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default',['browserSync','watch']);
  grunt.registerTask('build',['copy']);
}

module.exports = function(grunt) {
require("load-grunt-tasks")(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/ES5/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    'babel': {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "src/ES5/grunt.js": "src/ES6/grunt.6.js"
        }
      }
    }
});

  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('load-grunt-tasks');

  // Default task(s).
  grunt.registerTask('default', ['babel', 'uglify']);

};
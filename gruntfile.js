module.exports = function(grunt) {
 	// Project configuration
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),

 		// react jsx transform & dependency control
 		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ]
			},
			client: {
				src: ['src/jsx/*.jsx'],
				dest: 'test/js/app.js'
			}
		},

 		// Minified all of js file
 		uglify: {
 			options: {
 				magle: false,
 				compress: {
 					drop_console: true
 				},
 				preserveComments: false
 			},
			react: {
				src: 'test/js/app.js',
				dest: 'test/js/app.min.js'
			}
		},

 		// Run server
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'test/',
					open: true,
					livereload: true
				}
			}
		},

		// Fix jsx code and run again automatically 
		watch: {
			react: {
		        		files: 'src/jsx/*.jsx',
		        		tasks: ['browserify', 'uglify'],
		        		options: {
			      		livereload: true
			    	}
		      	}
		}
 	});

 	// loadNpmTasks
 	grunt.loadNpmTasks('grunt-browserify');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	
 	// registerTasks
 	grunt.registerTask('default', 	['browserify', 'uglify', 'connect', 'watch']);
 };
module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({

        // compass
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        // 画像パス
        paths: {
            img: 'images/',
            imgdist: 'dist/images/'
        },

        // imagemin
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.img %>',
                    src: '**/*.{jpg,gif}',
                    dest: '<%= paths.imgdist %>'
                }]
            }
        },

        // js-concat
        concat: {
            dist: {
                src: 'js/libs/*.js',
                dest: 'js/scripts.js'
            }
        },

        // js-uglify
        uglify: {
            build: {
                src: 'js/scripts.js',
                dest: 'js/scripts.min.js'
            }
        },

        // connect
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost'
                }
            }
        },

        // watch
        watch : {
            options: {
                livereload: true
            },
            html: {
                files: ['**/*.html']
            },
            img : {
                files: ['images/*.{png,jpg,gif}'],
                tasks: ['imagemin', 'pngmin']
            },
            sass: {
                files: ['**/*.scss'],
                tasks: ['compass']
            },
            scripts : {
                files : ["js/libs/*.js"],
                tasks : ['concat', 'uglify']
            }
        }
    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['connect', 'watch']);

};

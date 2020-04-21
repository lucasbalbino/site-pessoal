module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*{,*/}*',
                        '!dist/.git*',
                        'allure-results*'
                    ]
                }]
            },
            server: '.tmp'
        },
        uglify: {
            generated: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: 'js/*{,*/}*.js',
                    dest: 'dist'
                }]
            }
        },
        concat: {
            dist: {
                src: [
                    'js/**/*.js'
                ],
                dest: 'dist/js/<%= pkg.name %>.js'
            },
            providerJs: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery.translatejs/jquery.translate.js'
                ],
                dest: 'dist/js/vendor.js'
            },
            coreCss: {
                src: [
                    'css/**/*.css'
                ],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            generated: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: 'css/*{,*/}*.css',
                    dest: 'dist'
                }]
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: [
                        '*{,*/}*.{png,jpg,jpeg,gif,svg}',
                        '!bower_components/*{,*/}*.{png,jpg,jpeg,gif,svg}',
                        '!node_modules/*{,*/}*.{png,jpg,jpeg,gif,svg}'
                    ],
                    dest: 'dist'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: [
                        '*{,*/}*.html',
                        'views/*{,*/}*.html',
                        '!node_modules/*{,*/}*.html'
                    ],
                    dest: 'dist'
                }]
            }
        },
        useminPrepare: {
            html: '/index.html',
            options: {
                dest: 'dist'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        dest: 'dist',
                        src: [
                            '**',
                            '!js/*{,*/}*.js',
                            '!css/*{,*/}*.css',
                            '!*{,*/}*.bak'
                        ]
                    }
                ]
            },
            css: {
                expand: true,
                cwd: '<%= yeoman.app %>/css',
                dest: '.tmp/css/',
                src: '*{,*/}*.css'
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', [
        'clean',
        // 'jshint',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'htmlmin',
        'imagemin'
    ]);

};
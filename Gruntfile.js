module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({

        less : {
            // 作業のラベルは"dist"にしてみます
            dist : {
                // オプションの指定
                options : {
                    compress : true
                },
                // コンパイルするファイルの指定。左辺には出力先のCSSファイル、右辺には元となるLessファイルへのパス
                files : {
                    "zen/css/style.css" : "zen/css/style.less",
                    "apollo/css/style.css" : "apollo/css/style.less",
                    "illustfolio/css/style.css" : "illustfolio/css/style.less",
                    "illustfolio2/css/style.css" : "illustfolio2/css/style.less",
                    "tokusetsu2/css/style.css" : "tokusetsu2/css/style.less",
                    "croquis/css/style.css" : "croquis/css/style.less",
                    "css/style.css" : "css/style.less"
                }
            }
        },

        watch : {
            // ラベルは"less"にしてみます
            less : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "**/*.less"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    "less:dist"
                ]
            }
        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['less:dist','watch']);

};
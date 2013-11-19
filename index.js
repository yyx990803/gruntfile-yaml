module.exports = function (grunt) {
    var y = grunt.file.readYAML('grunt.yaml')

    grunt.initConfig(y.config)

    y.npm.forEach(function (t) {
        grunt.loadNpmTasks(t)
    })

    for (var task in y.tasks) {
        grunt.registerTask(task, y.tasks[task])
    }
}
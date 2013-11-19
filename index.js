module.exports = function (grunt, process) {
    var y = grunt.file.readYAML('grunt.yaml')
    if (process) process(y)

    grunt.initConfig(y.config)

    y.npm.forEach(function (t) {
        grunt.loadNpmTasks(t)
    })

    for (var task in y.tasks) {
        grunt.registerTask(task, y.tasks[task])
    }
}
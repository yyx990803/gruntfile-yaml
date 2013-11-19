Write grunt config in yaml.

``` bash
$ npm install gruntfile-yaml
```

grunt.yaml
``` yaml
config:

    sass:
        build:
            files:
                static/css/style/css: client/sass/main.sass

    jshint:
        build:
            src:
                - client/js/**/*.js
            options:
                jshintrc: true

    watch:
        options:
            livereload: true
        sass:
            files:
                - client/sass/**/*.sass
            tasks: sass
            options:
                nospawn: true

npm:
    - grunt-contrib-watch
    - grunt-contrib-sass
    - grunt-contrib-jshint

tasks:
    build:
        - sass
        - jshint
    default:
        - build
```

Gruntfile.js
``` js
module.exports = require('gruntfile-yaml')
```
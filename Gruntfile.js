module.exports = function(grunt) {
  grunt.initConfig(
    {
      build: {
        options: {
          include: [
            'and'
          , 'array/difference'
          , 'array/flatten'
          , 'array/flatten-by'
          , 'array/index-on'
          , 'array/is-array'
          , 'array/is-array-like'
          , 'array/replace-contents'
          , 'array/reverse'
          , 'array/symmetric-difference'
          , 'array/to-array'
          , 'array/trampoline-filter'
          , 'array/trampoline-flatten'
          , 'array/trampoline-merge-sort'
          , 'array/union'
          , 'ascending'
          , 'batch'
          , 'compare-against'
          , 'compare-on'
          , 'compare-with'
          , 'descending'
          , 'functor'
          , 'greater-than'
          , 'identity'
          , 'instantiate'
          , 'join'
          , 'modulo'
          , 'multiply'
          , 'negate'
          , 'object/unwrap'
          , 'object/wrap'
          , 'or'
          , 'partial'
          , 'property'
          , 'some-result'
          , 'string/append'
          , 'string/escape-regex'
          , 'string/lower'
          , 'string/prepend'
          , 'string/slugify'
          , 'string/upper'
          , 'sum'
          , 'tap'
          , 'trampoline'
          , 'transpose-arguments'
          ]
        }
      },
      karma: {
        "ci-test": {
          configFile: "karma.conf.js",
          colors: false,
          singleRun: true,
          reporters: "teamcity",
          browsers: ["Chrome"]
        }
      }
    }
  )

  grunt.loadNpmTasks('zambezi-contrib-build');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('ci-build', ['build']);
}

var allTestFiles = []
  , TEST_REGEXP = /test\.js$/

// Normalize a path to RequireJS module name.
function pathToModule(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '')
}

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file))
  }
})

require.config({
  // Karma serves files under `/base`,
  // which is the `basePath` from your config file.
  baseUrl: '/base'

  // Dynamically require all test files.
  , deps: allTestFiles

  // We have to kickoff testing framework,
  // after RequireJS is done with loading all the files.
  , callback: window.__karma__.start
})
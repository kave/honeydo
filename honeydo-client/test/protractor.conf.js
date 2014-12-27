exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/build/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
}
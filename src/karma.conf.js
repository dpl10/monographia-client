/* Karma configuration file, see https://karma-runner.github.io/1.0/config/configuration-file.html */
module.exports = function (config){
	config.set({
		basePath: '',
		frameworks: [
			'jasmine',
			'@angular-devkit/build-angular'
		],
		plugins: [
			require('@angular-devkit/build-angular/plugins/karma'),
			require('karma-chrome-launcher'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-firefox-launcher'),
			require('karma-jasmine'),
			require('karma-jasmine-html-reporter')
		],
		client: {
			clearContext: false /* leave Jasmine Spec Runner output visible in browser */
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../coverage'),
			reports: [
				'html',
				'lcovonly'
			],
			fixWebpackSourcePaths: true,
			thresholds: {
				statements: 80,
				lines: 80,
				branches: 80,
				functions: 80
			}
		},
		reporters: [
			'progress',
			'kjhtml'
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [
			'Chrome',
			'Firefox'
		],
		singleRun: false
	});
};

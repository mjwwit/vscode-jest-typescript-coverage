module.exports = {
	collectCoverage: true,
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts)$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: [
		'**/test/**/*.spec.(ts|js)'
	],
  testEnvironment: 'node'
};

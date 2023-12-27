// Jest configuration
module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'vue'],
    transform: {
        '.*\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue2-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};

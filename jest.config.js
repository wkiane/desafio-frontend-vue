module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx'
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.[jt]sx?$': 'ts-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    testMatch: [
        '**/src/**/*.spec.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/**/*.{js,ts}",
        "!**/src/*.{js,ts}",
        "!**/node_modules/**"
    ],
    coverageReporters: ["html", "text-summary"]
}

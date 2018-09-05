module.exports = {
    verbose: true,
    automock: false,
    testEnvironment: "node",
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
    moduleFileExtensions: ["js", "json", "jsx"],
    coveragePathIgnorePatterns: ["<rootDir>/webpack"]
};

export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.spec.ts?(x)"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@lib/(.*)$": "<rootDir>/lib/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
  verbose: true,
};

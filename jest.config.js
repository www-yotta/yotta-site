module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/__test__/setupTests.tsx"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
  },
  moduleDirectories: ["node_modules", "src"],
  globalSetup: "<rootDir>/__test__/setupEnv.ts",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/__test__/tsconfig.json",
    },
  },
  transform: {
    "\\.(jpg|ico|jpeg|png|gif|svg)$": "<rootDir>/.mock/fileMock.ts",
  },
};

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
  },
  moduleDirectories: ["node_modules", "src"],
};

module.exports = {
  testURL: "http://localhost/",
  testMatch: ["**/?*.(spec|test|e2e).(j|t)s?(x)"],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
  ],
};

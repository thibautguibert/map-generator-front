module.exports = {
  "*.{js,ts,tsx}": ["node_modules/.bin/eslint --fix"],
  "*.{ts, tsx}": [() => "tsc --skipLibCheck --noEmit"],
  "*.{js,jsx,ts,tsx,css,scss}": ["prettier --write"],
};

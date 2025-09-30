/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 120,
  arrowParens: "avoid",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;

module.exports = {
  plugins: [import("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.cjs",
  useTabs: false,
  singleQuote: true,
  trailingComma: "none",
  printWidth: 100,
};

const plugins = {
  dev: ["tailwindcss", "autoprefixer", "postcss-preset-env"],
  prod: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    "postcss-preset-env",
  ],
};

module.exports = {
  plugins: process.env.NODE_ENV === "production" ? plugins.prod : plugins.dev,
};

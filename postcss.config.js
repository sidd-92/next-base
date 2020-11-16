const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
    //tailwindcss("./tailwind.js"),
    //...(process.env.NODE_ENV === "production" ? purgecss : {}),
    ...(process.env.NODE_ENV === "production" ? {} : {}),
  },
};

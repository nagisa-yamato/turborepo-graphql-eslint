module.exports = {
  extends: ["custom/next"],
  overrides: [
    {
      files: ["*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        operations: "./app/**/*.tsx",
        schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
  ],
};

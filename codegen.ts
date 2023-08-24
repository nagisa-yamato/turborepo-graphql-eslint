import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "packages/codegen/web/": {
      preset: "client",
      documents: "apps/web/**/!(*.d).{ts,tsx}",
      schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    },
    "packages/codegen/docs/": {
      preset: "client",
      documents: "apps/docs/**/!(*.d).{ts,tsx}",
      schema: "https://rickandmortyapi.com/graphql",
    },
  },
};

export default config;

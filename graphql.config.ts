import type { CodegenConfig } from "@graphql-codegen/cli";
import type { IGraphQLConfig } from "graphql-config";

const webCodegenConfig: CodegenConfig = {
  ignoreNoDocuments: true,
  generates: {
    "packages/codegen/web/": {
      preset: "client",
    },
  },
};

const docsCodegenConfig: CodegenConfig = {
  ignoreNoDocuments: true,
  generates: {
    "packages/codegen/docs/": {
      preset: "client",
    },
  },
};

const config: IGraphQLConfig = {
  projects: {
    web: {
      documents: "apps/web/**/!(*.d).{ts,tsx}",
      schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      extensions: {
        codegen: webCodegenConfig,
      },
    },
    docs: {
      documents: "apps/docs/**/!(*.d).{ts,tsx}",
      schema: "https://rickandmortyapi.com/graphql",
      extensions: {
        codegen: docsCodegenConfig,
      },
    },
  },
};

export default config;

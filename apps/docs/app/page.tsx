import { graphql } from "codegen/docs";
import { Button, Header } from "ui";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const EpisodesQueryDocument = graphql(`
  query Episode {
    episodes {
      results {
        id
      }
    }
  }
`);

export default function Page(): JSX.Element {
  return (
    <>
      <Header text="Docs" />
      <Button />
    </>
  );
}

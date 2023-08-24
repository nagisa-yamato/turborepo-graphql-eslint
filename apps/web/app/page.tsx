import { graphql } from "codegen/web";
import { Button, Header } from "ui";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const AllFilmsQueryDocument = graphql(`
  query AllFilms {
    allFilms {
      edges {
        node {
          id
        }
      }
    }
  }
`);

export default function Page(): JSX.Element {
  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}

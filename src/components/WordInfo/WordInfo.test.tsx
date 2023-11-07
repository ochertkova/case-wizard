import React from "react";
import { render, screen } from "@testing-library/react";
import WordInfo from "./WordInfo";

test("renders correct result", () => {
  const wordDef: WordDef = {
    word_type: "ADJ",
    dictionary_form: "nopea",
    case: "PARTITIVE" as unknown as Case, // weird hack, doesn't work otherwise
    type_finnish: "nominityyppi",
  };

  render(<WordInfo word={wordDef} />);
  const dictionary_form = screen.getByText("Dictionary form : nopea");
  expect(dictionary_form).toBeInTheDocument();
});

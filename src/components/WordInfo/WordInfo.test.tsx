import React from "react";
import { render, screen } from "@testing-library/react";
import WordInfo from "./WordInfo";

test("renders correct adjective", () => {
  const wordDef: WordDef = {
    word_type: "ADJ",
    dictionary_form: "nopea",
    case: "NOMINATIVE" as unknown as Case,
    type_finnish: "nominityyppi",
    count: "SINGLE" as unknown as Count,
    extra: {
      comparison: "COMPARATIVE" as unknown as Comparison,
    },
  };

  render(<WordInfo word={wordDef} />);
  const dictionary_form = screen.getByText("Dictionary form : nopea");
  const type_finnish = screen.getByText("Type of Word (Finnish): nominityyppi");
  const word_type = screen.getByText("Type of Word (Common): Adjective");
  const word_case = screen.getByText("Case: NOMINATIVE");
  const count = screen.getByText("Count: SINGLE");
  const extra_info = screen.getByText("Extra info: COMPARATIVE");
  expect(dictionary_form).toBeInTheDocument();
  expect(type_finnish).toBeInTheDocument();
  expect(word_type).toBeInTheDocument();
  expect(word_case).toBeInTheDocument();
  expect(count).toBeInTheDocument();
  expect(extra_info).toBeInTheDocument();
});

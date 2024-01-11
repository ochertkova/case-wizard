import React from "react";
import { render, screen } from "@testing-library/react";
import WordInfo from "./WordInfo";

test("renders correct adjective", () => {
  const wordDef: WordDef = {
    wordType: "adjective",
    dictionaryForm: "nopea", 
    typeFinnish: "laatusana",
    comparison: "comparative" as unknown as Comparison,
    wordCase: "nominative" as unknown as Case,
    number: "single" as unknown as Count,
    
  };

  render(<WordInfo word={wordDef} />);
  const dictionary_form = screen.getByText("Dictionary form: nopea");
  const type_finnish = screen.getByText("Type of Word (Finnish): laatusana");
  const word_type = screen.getByText("Type of Word (Common): Adjective");
  const word_case = screen.getByText("Case: nominative");
  const number = screen.getByText("Number: single");
  const extra_info = screen.getByText("Extra info: comparative");
  expect(dictionary_form).toBeInTheDocument();
  expect(type_finnish).toBeInTheDocument();
  expect(word_type).toBeInTheDocument();
  expect(word_case).toBeInTheDocument();
  expect(number).toBeInTheDocument();
  expect(extra_info).toBeInTheDocument();
});

type WordDef = {
  type_finnish: string;
  dictionary_form: string;
  word_type: string;
  case: Case;
};

enum Case {
  NOMINATIVE,
  PARTITIVE,
}

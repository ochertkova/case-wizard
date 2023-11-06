type WordDef = {
  type_finnish: string;
  nominative: string;
  word_type: string;
  case: Case;
};

enum Case {
  NOMINATIVE,
  PARTITIVE,
}

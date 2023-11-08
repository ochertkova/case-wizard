type WordDef = {
  type_finnish: string;
  dictionary_form: string;
  word_type: string;
  case: Case;
  count: Count;
  extra: ExtraAdj | ExtraNoun;
};

enum Case {
  NOMINATIVE,
  PARTITIVE,
}

enum Comparison {
  POSITIVE,
  COMPARATIVE,
  SUPERLATIVE,
}

enum Count {
  SINGLE,
  PLURAL,
}

enum Person {
  FIRST,
  SECOND,
  THIRD,
}

type ExtraAdj = {
  comparison: Comparison;
};

type ExtraNoun = {
  person: Person;
};

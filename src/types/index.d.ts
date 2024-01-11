type WordDef = {
  typeFinnish: string;
  dictionaryForm: string;
  wordType: string;
  wordCase?: Case;
  number?: Count;
  comparison?: Comparison;
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
  SINGULAR,
  PLURAL
}

enum Person {
  FIRST,
  SECOND,
  THIRD
}

type ExtraAdj = {
  comparison: Comparison;
};

type ExtraNoun = {
  wordCase: Case;
  wordNumber: Count
};

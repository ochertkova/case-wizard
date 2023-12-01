from pydantic import BaseModel

type WordInfo = WordBase | NameBase | Adjective | Error

class WordBase(BaseModel):
    type_finnish: str
    dictionary_form: str
    word_type: str
    #word_case: str
    # extra: ExtraAdj | ExtraNoun

class NameBase(WordBase):
    word_case: str
    number: str

class Error(BaseModel):
    error: str

class Adjective(NameBase):
    comparison: str

class Verb(WordBase):
    person: str
    mood: str
    number: str
    tense: str
    negative: bool

class Adverb(WordBase):
    comparison: str

# class ItemBase(BaseModel):
#     title: str
#     description: str | None = None

# type WordDef = {
#   type_finnish: str;
#   dictionary_form: str;
#   word_type: str;
#   case: Case;
#   count: Count;
#   extra: ExtraAdj | ExtraNoun;
# };

# enum Case {
#   NOMINATIVE,
#   PARTITIVE,
# }

# enum Comparison {
#   POSITIVE,
#   COMPARATIVE,
#   SUPERLATIVE,
# }

# enum Count {
#   SINGLE,
#   PLURAL,
# }

# enum Person {
#   FIRST,
#   SECOND,
#   THIRD,
# }

# type ExtraAdj = {
#   comparison: Comparison;
# };

# type ExtraNoun = {
#   person: Person;
# };

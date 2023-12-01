import pytest
import wordmagic
import schemas

def test_get_adjective_info():
    result: schemas.WordInfo = wordmagic.get_word_info("nopeampi")
    
    if isinstance(result, schemas.Adjective):
        adj: schemas.Adjective = result    
        assert adj.comparison == "comparative"
        assert adj.dictionary_form == "nopea"
        assert adj.type_finnish == "laatusana"
        assert adj.word_type == "adjective"
        assert adj.number == "singular"
        assert adj.word_case == "nominative"
    else:
        pytest.fail("Result should be an Adjective object")

def test_get_noun_info():
    result: schemas.WordInfo = wordmagic.get_word_info("koirien")
    
    if isinstance(result, schemas.NameBase):
        noun: schemas.NameBase = result    
        assert noun.dictionary_form == "koira"
        assert noun.type_finnish == "nimisana"
        assert noun.word_type == "noun"
        assert noun.number == "plural"
        assert noun.word_case == "genitive"
    else:
        pytest.fail("Result should be an Noun object")

def test_get_verb_info():
    result: schemas.WordInfo = wordmagic.get_word_info("luen")
    
    if isinstance(result, schemas.Verb):
        verb: schemas.Verb = result    
        assert verb.dictionary_form == "lukea"
        assert verb.type_finnish == "teonsana"
        assert verb.word_type == "verb"
        assert verb.number == "singular"
        assert verb.mood == "indicative"
        assert verb.tense == "present_simple"
        assert verb.negative == False
        assert verb.person == "1"
    else:
        pytest.fail("Result should be a Verb object")

def test_get_pronoun_info():
    result: schemas.WordInfo = wordmagic.get_word_info("meidän")
    
    if isinstance(result, schemas.NameBase):
        pronoun: schemas.NameBase = result    
        assert pronoun.dictionary_form == "me"
        assert pronoun.type_finnish == "asemosana"
        assert pronoun.word_type == "pronoun"
        assert pronoun.number == "plural"
        assert pronoun.word_case == "genitive"
    else:
        pytest.fail("Result should be a Pronoun object")

def test_get_adverb_info():
    result: schemas.WordInfo = wordmagic.get_word_info("nopeammin")
    
    if isinstance(result, schemas.Adverb):
        adverb: schemas.Adverb = result    
        assert adverb.dictionary_form == "nopea"
        assert adverb.type_finnish == "seikkasana"
        assert adverb.word_type == "adverb"
        assert adverb.comparison == "comparative"
    else:
        pytest.fail("Result should be an adverb object")
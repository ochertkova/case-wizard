import pytest
import wordmagic
import schemas

def test_get_word_info():
    result: schemas.WordInfo = wordmagic.get_word_info("nopeampi")
    
    if isinstance(result, schemas.Adjective):
        adj: schemas.Adjective = result    
        assert adj.comparison == "comparative"
        assert adj.dictionary_form == "nopea"
        assert adj.type_finnish == "laatusana"
        assert adj.word_type == "adjective"
        assert adj.number == "singular"
    else:
        pytest.fail("Result should be an Adjective object")

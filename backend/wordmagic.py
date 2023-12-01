import os
import sys
import libvoikko
from utils import get_with_default
import schemas

if os.name == "nt":
    libvoikko.Voikko.setLibrarySearchPath("./voikko")
elif sys.platform == "darwin":
    libvoikko.Voikko.setLibrarySearchPath("/usr/local/Cellar/libvoikko/4.3.2/lib")
else:
    sys.stderr.writelines(["You OS is not supported!"])
    sys.exit(-1)

v = libvoikko.Voikko(u"fi", path="./voikko")

voikko_pos_to_english = {
    "nimisana":"noun",
    "laatusana":"adjective",
    "asemosana": "pronoun",
    "teonsana":"verb",
    "sidesana":"particle",
    "suhdesana": "adposition",
    "seikkasana": "adverb",
    "huudahdussana":"interjaction"
}

voikko_case_to_english = {
    "nimento":"nominative", 
    "omanto":"genitive",
    "osanto":"partitive",
    "sisaolento":"inessive",
    "sisaeronto":"elative",
    "sisatulento":"illative",
    "ulkoolento":"adessive",
    "ulkoeronto":"ablative",
    "ulkotulento":"allative",
    "olento":"essive",
    "tulento":"translative",
    "vajanto":"abessive",
    "keinonto":"instructive",
    "kerrontosti":"adverbial"
}

def get_word_info(word_form: str) -> schemas.WordInfo: 
    # magic
    try:
        voikko_dict = v.analyze(word_form)
        word_data = voikko_dict[0]

        print(word_data)
        word_type = get_with_default(voikko_pos_to_english, word_data["CLASS"], word_data["CLASS"])#third is default
        #voikko_pos_to_english[word_data["CLASS"]] or word_data["CLASS"]
        match word_data["CLASS"], get_with_default(word_data, "SIJAMUOTO", ""):
            case ("laatusana", "keinonto"):
                return schemas.Adverb(type_finnish="seikkasana",
                                dictionary_form=word_data["BASEFORM"],
                                word_type="adverb",
                                comparison=word_data["COMPARISON"])
            case ("laatusana", sijamuoto):
                    return schemas.Adjective(type_finnish = word_data["CLASS"],
                                dictionary_form = word_data["BASEFORM"],
                                word_type = word_type, 
                                word_case = get_with_default(voikko_case_to_english, sijamuoto, sijamuoto),
                                comparison = word_data["COMPARISON"],
                                number = word_data["NUMBER"])
            case ("nimisana", sijamuoto):
                word_case = get_with_default(voikko_case_to_english, sijamuoto, sijamuoto)
                return schemas.NameBase(type_finnish=word_data["CLASS"],
                                dictionary_form=word_data["BASEFORM"],
                                word_type=word_type, 
                                word_case=word_case,
                                number = word_data["NUMBER"])
            case ("teonsana", ""):
                return schemas.Verb(type_finnish=word_data["CLASS"],
                                dictionary_form=word_data["BASEFORM"],
                                word_type=word_type,
                                number = word_data["NUMBER"],
                                person = word_data["PERSON"],
                                mood = word_data["MOOD"],
                                negative = word_data["NEGATIVE"],
                                tense = word_data["TENSE"]
                                    )
            case ("asemosana", sijamuoto):
                word_case = get_with_default(voikko_case_to_english, sijamuoto, sijamuoto)
                return schemas.NameBase(type_finnish=word_data["CLASS"],
                                dictionary_form=word_data["BASEFORM"],
                                word_type=word_type, 
                                word_case=word_case,
                                number = word_data["NUMBER"]
                                    )
            case ("seikkasana", ""):
                return schemas.Adverb(type_finnish=word_data["CLASS"],
                                dictionary_form=word_data["BASEFORM"],
                                word_type=word_type,
                                comparison = word_data["COMPARISON"]
                                    )            
        return schemas.WordBase(type_finnish=word_data["CLASS"],dictionary_form=word_data["BASEFORM"],word_type=word_type)
    except:
        return schemas.Error(error="Word {word} not found".format(word=word_form))


if __name__ == "__main__":
    print(
        get_word_info(sys.argv[1]))
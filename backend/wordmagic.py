import os
import sys
import libvoikko

if os.name == "nt":
    libvoikko.Voikko.setLibrarySearchPath("./voikko")
elif sys.platform == "darwin":
    libvoikko.Voikko.setLibrarySearchPath("/usr/local/Cellar/libvoikko/4.3.2/lib")
else:
    sys.stderr.writelines(["You OS is not supported!"])
    sys.exit(-1)

v = libvoikko.Voikko(u"fi", path="./voikko")

def get_word_info(word_form: str):
    # magic
    try:
        voikko_dict = v.analyze(word_form)
        word_data = voikko_dict[0]
        return {
            "nominative_case": word_data["BASEFORM"],
            "part_of_speech": word_data["CLASS"] 
        }
    except:
        return {"error": "Word {word} not found".format(word=word_form)}


if __name__ == "__main__":
    print(
        get_word_info(sys.argv[1]))
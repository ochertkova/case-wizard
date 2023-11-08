import { Box, Stack, Typography } from "@mui/material";

const getWordType = (wordTypeCode: String) => {
  switch (wordTypeCode) {
    case "ADJ":
      return "Adjective";
    default:
      return "Unknown word type";
  }
};

const getExtraInfo = (
  extrainfo: ExtraAdj | ExtraNoun,
  wordTypeCode: String
) => {
  switch (wordTypeCode) {
    case "ADJ":
      let { comparison } = extrainfo as ExtraAdj;
      return comparison;
  }
};

interface WordInfoProps {
  word: WordDef;
}

const WordInfo = ({ word }: WordInfoProps) => {
  const commonWordType = getWordType(word.word_type);
  const extraInfo = getExtraInfo(word.extra, word.word_type);
  return (
    <Box padding={3}>
      <Stack>
        <Typography>Dictionary form : {word.dictionary_form}</Typography>
        <Typography>Type of Word (Finnish): {word.type_finnish}</Typography>
        <Typography>Type of Word (Common): {commonWordType}</Typography>
        <Typography>Case: {word.case}</Typography>
        <Typography>Count: {word.count}</Typography>
        <Box>
          <Typography>Extra info: {extraInfo}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
export default WordInfo;

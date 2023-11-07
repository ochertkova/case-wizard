import { Box, Stack, Typography } from "@mui/material";

const getWordType = (wordTypeCode: String) => {
  switch (wordTypeCode) {
    case "ADJ":
      return "Adjective";
    default:
      return "Unknown word type";
  }
};

interface WordInfoProps {
  word: WordDef
}

const WordInfo = ({ word }: WordInfoProps) => {
  const commonWordType = getWordType(word.word_type);
  return (
    <Box padding={3}>
      <Stack>
        <Typography>Nominative case : {word.nominative}</Typography>
        <Typography>Type of Word (Finnish): {word.type_finnish}</Typography>
        <Typography>Type of Word (Common): {commonWordType}</Typography>
        <Typography>Case: {word.case}</Typography>
      </Stack>
    </Box>
  );
};
export default WordInfo;

import { Box, Stack, Typography } from "@mui/material";

const getWordType = (wordTypeCode: String) => {
  switch (wordTypeCode) {
    case "ADJ":
      return "Adjective";
    default:
      return "Unknown word type";
  }
};

const WordInfo = (props: WordDef) => {
  const commonWordType = getWordType(props.word_type);
  return (
    <Box padding={3}>
      <Stack>
        <Typography>Nominative case : {props.nominative}</Typography>
        <Typography>Type of Word (Finnish): {props.type_finnish}</Typography>
        <Typography>Type of Word (Common): {commonWordType}</Typography>
        <Typography> Case: {props.case}</Typography>
      </Stack>
    </Box>
  );
};
export default WordInfo;

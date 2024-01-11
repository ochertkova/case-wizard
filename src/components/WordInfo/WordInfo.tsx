import { Box, Stack, Typography } from "@mui/material";



interface WordInfoProps {
  word: WordDef;
}
interface ExtraInfo {
  wordCase?: Case;
  wordNumber?: Count
  comparison?: Comparison
}

const ExtraNoun = ({ wordCase, wordNumber }: ExtraInfo) => {
  return (
    <>
      <Stack>
      <Typography>Case: {wordCase}</Typography>
      <Typography>Number: {wordNumber}</Typography>
      </Stack>
    </>   
  );
};

const ExtraAdjective = ({ wordCase, wordNumber, comparison}: ExtraInfo) => {
  return (
    <>
      <Stack>
      <Typography>Case: {wordCase}</Typography>
        <Typography>Number: {wordNumber}</Typography>
        <Typography>Comparison: {comparison}</Typography>
      </Stack>
    </>   
  );
};


const WordInfo = ({ word }: WordInfoProps) => {
  return (
    <Box padding={3}>
      <Stack>
        <Typography>Dictionary form: {word.dictionaryForm}</Typography>
        <Typography>Type of Word (Finnish): {word.typeFinnish}</Typography>
        <Typography>Type of Word (Common): {word.wordType}</Typography>
        <Extra word={word}></Extra>
      </Stack>
    </Box>
  );
};
export default WordInfo;

function Extra(props: WordInfoProps) {
  const word = props.word
 
  return <Box>
    <Typography>Extra info
    {getComponent(word)}
    </Typography>
  </Box>;
}

function getComponent(word: WordDef) {
  switch( word.wordType){
    case "noun":
      return <ExtraNoun wordCase={word.wordCase} wordNumber={word.number}></ExtraNoun>
    case "adjective":
        return <ExtraAdjective wordCase={word.wordCase} wordNumber={word.number} comparison={word.comparison}></ExtraAdjective>
  } 
}

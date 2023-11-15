import React, { useState } from "react";
import axios from "axios";
import { FormControl, TextField, Stack, Button, Box } from "@mui/material";
import WordInfo from "./components/WordInfo/WordInfo";

const BASE_URL = "http://localhost:3004";

function App() {
  const [result, setResult] = useState<WordDef | undefined>(undefined);
  const [searchText, setSearchText] = useState("");

  const doSearch = () => {
    axios
      .get(`${BASE_URL}/${searchText}`)
      .then((resp) => resp.data)
      .then(setResult);
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        padding={3}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          doSearch();
        }}
      >
        <Stack>
          <FormControl>
            <TextField
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              id="search"
              label="Enter a word"
              variant="outlined"
            ></TextField>
          </FormControl>
          <Button variant="contained" type="submit">
            Get dictionary form
          </Button>
        </Stack>
      </Box>
      {result && <WordInfo word={result} />}
    </Stack>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { FormControl, TextField, Stack, Button, Box } from "@mui/material";
import WordInfo from "./components/WordInfo/WordInfo";

const BASE_URL = "http://localhost:3004";

function App() {
  const [result, setResult] = useState({} as WordDef);
  const [searchText, setSearchText] = useState("");

  console.log("search text is", searchText);

  const doSearch = () => {
    axios
      .get(`${BASE_URL}/${searchText}`)
      .then((resp) => resp.data)
      .then(setResult);
  };

  console.log(result);

  const {
    type_finnish: type_f,
    nominative: nom,
    word_type: wt,
    case: wcase,
  } = result;

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
            Get nominative case
          </Button>
        </Stack>
      </Box>
      {result !== null && <WordInfo {...result} />}
    </Stack>
    // <>
    //   <input
    //     type="text"
    //     onChange={(e) => setSearchText(e.target.value)}
    //   ></input>
    //   <input type="button" onClick={doSearch} />
    // </>
  );
}

export default App;

# Case Wizard App

This is a WIP project.

The App takes a word in any case or form in Finnish language (sijamuoto) and restores its dictionary form. It also displays other info, such as number, person, negative, tense, comparison etc. depending on the word type.
The App uses Voikko library for word analysis.

Tech Stack: TypeScript, React, Python.

## Setup & Installation

Clone the repo.

```bash
git clone <repo-url>
```
## Running The App

To run the App locally:

1. Start Front-end from case-wizard directory:
```bash
npm start
```

2. Start Back-end from case-wizard/backend directory:
```bash
pipenv run devserver --port 8888
```
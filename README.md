# Old Testament — 1 Samuel

A single-page study guide for her Old Testament class, built from her notes on
1 Samuel: Samuel (chapters 1–7), Saul (8–15), and David and Saul (16–31). Same
look as the Greek study sheet, with a hint of sage green; the gold stays on the
ornaments.

- Guide — the chapter in eleven parts as a checklist, with "Study it" and subsection links
- Samuel, Saul, David & Saul — notes (green marks the most testable lines), two flashcard decks each, match, quiz
- Practice Quiz — questions from all three parts; "The 50" draws at least two from every part

## Build

`src/` is concatenated into `index.html` by `sh build.sh`, which also runs
`src/test.js`. `node src/test-dom.js <dir with node_modules/jsdom>` clicks
through the built page.

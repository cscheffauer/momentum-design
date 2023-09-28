### Todos Momentum Component Library

- [x] ~~`Christoph` Adjust the styling in the Text component to reflect the latest Typeramp (Inter) defined in Figma. Includes importing Inter (check Mrv2 on how to do it)~~
- [x] ~~`Christoph` Finish text component (adding e2e tests, etc.)~~
- [ ] `Christoph` Build Focus Ring (use this as example: https://github.com/material-components/material-web/blob/main/focus/internal/focus-ring.ts)
- [ ] `Christoph` Build Chip component (including stories, docs, e2e tests etc.) - for the text children use the new Text component then. Building it with a slotted approach
- [ ] Build Badge component (including stories, docs, e2e tests etc.) - for the text children use the new Text component then. Building it with a slotted approach
- [ ] Build Avatar component (including stories, docs, e2e tests etc.) - for the text children use the new Text component then. Building it with a slotted approach
- [ ] `Laszlo` Build Checkbox component (including stories, docs, e2e tests etc.) - for the text children use the new Text component then. Building it with a slotted approach


#### Tech debt

- [ ] `Tim` Make the export for both modules and browser consumption
- [ ] Add jest unit test script to components package.json and hook Jest up (suuuper simple and fast setup if possible) - for utility testing
- [ ] Make fixtures also work for e2e tests (esm vs cjs is kind of the issue there)

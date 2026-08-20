## 7.0.0
### Breaking changes
* the package is published as ES2020 modules instead of CommonJS, in line with the other `powerbi-visuals-utils-*` v7 packages
* `powerbi-visuals-api` moved to `devDependencies`: it is no longer installed transitively and has to be declared by the visual

### Fixed
* `createVisualSubSelectionForSingleObject` did not anchor the selection origin for `NumericText` and wrongly anchored it for `None`: the sub-selection type was matched with `in`, which checks array indices instead of values
* `HtmlSubSelectionHelper.getDataForElement` is now typed as `SubSelectionElementData | null`, matching what it returns for elements without the data attribute
* added the missing `typescript` dev dependency

### Other changes
* the published package is limited to `lib` and the docs via the `files` field, instead of relying on the ignore rules
* unit tests migrated to Vitest 4
* ESLint migrated to the flat config, updated to ESLint 9 and typescript-eslint 8
* `strict` mode enabled
* new scripts: `prebuild`, `prepublishOnly`, `test:typecheck`, `lint:fix`
* CI runs audit, lint, typecheck, tests and build on Node 20 and 22; added Dependabot

## 6.0.2
* powerbi-visuals-api updated to 5.9.0
* added codeql.yml and build.yml
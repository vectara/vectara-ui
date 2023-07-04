# Vectara UI

This is Vectara's design system, codified as a React component library.

## Usage

Import components like this:

```tsx
import { VuiFlexContainer, VuiItem } from "@vectara/vectara-ui";
```

This project assumes you're using Sass. Import the Sass styles from this project into the root-level:

```scss
@import "~@vectara/vectara-ui/src/index";
```

You can consume Vectara UI's Sass variables by placing this import in the files that use the variables:

```scss
@import "~@vectara/vectara-ui/src/vars";
```

## Publishing

Publishing a new version of the package consists of two steps: **versionining** and **publishing to NPM**.

### Versioning

1. Run `npm version {number}` to increment package.json and create a tag.
2. Run `git push origin --tags` to push the new tag to the repo.
3. Optional: [Manually create a release in GitHub.](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

### Publishing to NPM

1. Run `npm run buildPackage` to create the distributable files.
2. Run `npm login --scope=@vectara --registry="https://registry.npmjs.org/"` to log into the registry and scope.
3. Run `npm publish --access public` to publish the package to NPM.

## Local development

Use `npm run start` to run the docs site locally and interact with the code you're developing.

To test the package locally, use [`npm link`](https://docs.npmjs.com/cli/v9/commands/npm-link) to consume the distributable files in a sibling project.

If you get an error regarding an ["invalid hook call"](https://iws.io/2022/invalid-hook-multiple-react-instances), you might need to use `npm link` to temporarily link the consumer's React dependencies to Vectara-UI's React dependencies:

```bash
npm link ../{consumer project}/node_modules/react ../{consumer project}/node_modules/react-dom ../{consumer project}/node_modules/react-router-dom
```

When you're done testing out the consumer, you can unlink these dependencies:

```bash
npm unlink ../{consumer project}/node_modules/react ../{consumer project}/node_modules/react-dom ../{consumer project}/node_modules/react-router-dom
```

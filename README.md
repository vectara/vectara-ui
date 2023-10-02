# Vectara UI

This is Vectara's design system, codified as a React component library. It's intended solely for consumption by Vectara and currently it isn't available for public use under any license. For more information see [NO_LICENSE](./NO_LICENSE).

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

Publishing a new version of the package consists of three steps:

1. Maintaining the CHANGELOG.
2. Versioning the package.
3. Publishing to NPM.

### Maintain the CHANGELOG

As you introduce changes, record them in the CHANGELOG beneath the `main` section. Before you create a new version, submit a PR that updates the `package.json` version and moves the `main` content into a new section for the new version. We follow semver, so breaking changes should result in a major version bump.

### Version the package

1. Run `npm version {number}` to update package.json with the new version number and create a tag to track the version.
2. Run `git push origin --tags` to push the new tag to the repo.
3. Optional: [Manually create a release in GitHub.](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

### Publish to NPM

1. Run `npm run buildPackage` to create the distributable files.
2. Run `npm login --scope=@vectara --registry="https://registry.npmjs.org/"` to log into the registry and scope.
3. Run `npm publish --access public` to publish the package to NPM.

## Local development

Use `npm run start` to run the docs site locally and interact with the code you're developing.

To test the package locally, use [`npm link`](https://docs.npmjs.com/cli/v9/commands/npm-link) to consume the distributable files in a sibling project.

If you get an error regarding an ["invalid hook call"](https://iws.io/2022/invalid-hook-multiple-react-instances), you might need to use `npm link` to temporarily link the consumer's React dependencies to Vectara-UI's React dependencies. In this example, we're consuming Vectara-UI in [Vectara-Answer](https://github.com/vectara/vectara-answer):

```bash
npm link ../vectara-answer/node_modules/react ../vectara-answer/node_modules/react-dom ../vectara-answer/node_modules/react-router-dom
```

When you're done testing out the consumer, you can unlink these dependencies:

```bash
npm unlink ../vectara-answer/node_modules/react ../vectara-answer/node_modules/react-dom ../vectara-answer/node_modules/react-router-dom
```

## Licensing and public use

Though the GitHub terms of service grants anybody the right to fork and look through this repository, we haven't yet licensed this code for use by anybody. This means Vectara reserves all rights to the contents of this repository. You can't reproduce, distribute, or create derivative works from it. For more information on reserved copyright of GitHub repos, see https://choosealicense.com/no-permission/.

For more information on our lack of licensing, see [NO_LICENSE](./NO_LICENSE).

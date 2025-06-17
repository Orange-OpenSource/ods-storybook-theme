# Developer Guide

## Formatting

Project uses Prettier for code formatting.

Run the following command to format the code:

```bash
npm run prettier:format
```

Run the following command to check if the code is formatted:

```bash
npm run prettier:check
```

Please make sure to run the `prettier:format` command before committing your changes. As a security measure, the CI will fail if the code is not formatted.

If you are using Visual Studio Code, you can install the Prettier extension. We have included a configuration file in the project that will automatically use the project's Prettier settings. You can enable the "Format on Save" option in the settings to format the code automatically when saving a file.

## Release

To release a new version of the library, you need to follow these steps:

1. Update the version number in `package.json` according to the [Semantic Versioning guidelines](https://semver.org/).
2. Run `npm i` to updated version number in `package-lock.json`.
3. Update the version number in the header of `OrangeTheme.js` file.
4. Update the compatibility table in the README file.
5. Commit the changes with a message like `chore(release): vX.Y.Z`.
6. Tag with the same version number: `git tag vX.Y.Z`.
7. Publish the package to npm: `npm publish`.

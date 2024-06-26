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

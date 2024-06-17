<h1 align="center">Orange Design System Storybook Theme</h1>

<p align="center">
  Orange Design System Storybook Theme provides a Storybook theme for Orange.
</p>

![ods-orange-theme-screenshot](https://github.com/Orange-OpenSource/ods-storybook-theme/assets/17381666/3d2571e1-8311-4807-8dad-a401cada4cc6)

## Table of contents

- [Quick start](#quick-start)
- [Supported versions](#supported-versions)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)

## Quick start

- Install with [npm](https://www.npmjs.com/): `npm install ods-storybook-theme --save-dev`

In order to import the theme into Storybook, create new `.storybook/manager.js` file in your project containing:

```js
import { addons } from '@storybook/addons';
import OrangeTheme from 'ods-storybook-theme/OrangeTheme.js';

addons.setConfig({
  theme: OrangeTheme,
});
```

## Supported versions

| ods-storybook-theme | Storybook     |
| ------------------- | ------------- |
| 1.x                 | 6.x, 7.x, 8.x |

## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/ods-storybook-theme/blob/main/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Please refer to the [developer guide](https://github.com/Orange-OpenSource/ods-storybook-theme/blob/main/DEVELOP.md) for information on how to build the library.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, ODS Storybook Theme is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/ods-storybook-theme/releases) for changelogs for each release version of ODS Storybook Theme.

## Copyright and license

Code released under the MIT License.

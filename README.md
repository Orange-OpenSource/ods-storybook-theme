# ODS Storybook Theme

Orange Design System Storybook Theme provides a Storybook theme for Orange.

![ods-orange-theme-screenshot](https://github.com/Orange-OpenSource/ods-storybook-theme/assets/17381666/3d2571e1-8311-4807-8dad-a401cada4cc6)

## Quick start

* Install with [npm](https://www.npmjs.com/): `npm install ods-storybook-theme --save-dev`

In order to import the theme into Storybook, create new `.storybook/manager.js` file in your project containing:

```js
import { addons } from '@storybook/addons';
import OrangeTheme from 'ods-storybook-theme/OrangeTheme.js';

addons.setConfig({
  theme: OrangeTheme,
});
```

## Supported versions

| ods-storybook-theme | Storybook |
| ------------------- | --------- |
| 1.0.0               | 6.x, 7.x  |

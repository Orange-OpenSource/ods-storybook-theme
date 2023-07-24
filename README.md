# ODS Storybook Theme

Orange Design System Storybook Theme provides a Storybook theme for Orange.

![ods-orange-theme-screenshot](https://user-images.githubusercontent.com/17381666/147080007-e8f64b77-3dc2-420d-a3ab-71a05cb03a22.png)

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
| 0.1.0               | 6.x, 7.x  |

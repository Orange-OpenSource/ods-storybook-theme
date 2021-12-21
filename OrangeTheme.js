/*
 * Software Name: ODS Storybook Theme
 * Version: 0.1
 * SPDX-FileCopyrightText: Copyright (c) 2021 Orange SA
 * SPDX-License-Identifier: MIT
 *
 * This software is distributed under the MIT Licence,
 * the text of which is available at https://github.com/Orange-OpenSource/ods-storybook-theme/blob/main/LICENSE
 * or see the "LICENSE" file for more details.
 */

import { create } from '@storybook/theming/create';

// Source: https://storybook.js.org/docs/react/configure/theming
// Tip: When working locally on themes, use the --no-manager-cache option
export default create({
  base: 'light',

  colorPrimary: '#ff7900',
  colorSecondary: '#000',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#ff7900',
  barBg: '#000',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'Orange Design System',
  brandUrl: 'https://system.design.orange.com/',
  brandImage: 'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2050%2050%27%3e%3cdefs%3e%3cstyle%3e@media%28max-width:49.98px%29%7b%23b%7bdisplay:none%7d%7d@media%28min-width:50px%29%7b%23c%7bdisplay:none%7d%7d%3c/style%3e%3c/defs%3e%3cpath%20fill=%27%23ff7900%27%20d=%27M0%200h50v50H0z%27/%3e%3cpath%20fill=%27%23fff%27%20id=%27c%27%20d=%27M7%2035h35v7H7z%27/%3e%3cpath%20fill=%27%23fff%27%20id=%27b%27%20stroke-width=%27.18%27%20d=%27M19.61%2045.16a4.1%204.1%200%2001-2.29.69c-1.3%200-2.06-.87-2.06-2.02%200-1.56%201.43-2.39%204.38-2.72v-.39c0-.5-.39-.8-1.1-.8a2.07%202.07%200%2000-1.69.8l-1.23-.7q.97-1.36%202.96-1.36c1.82%200%202.83.78%202.83%202.06v5.05h-1.63zm-2.56-1.47c0%20.47.3.9.82.9.58%200%201.14-.23%201.7-.73v-1.64c-1.71.21-2.52.65-2.52%201.48zm5.8-4.7l1.51-.2.17.82c.86-.63%201.54-.96%202.4-.96%201.42%200%202.16.76%202.16%202.27v4.84h-1.83v-4.52c0-.86-.22-1.24-.88-1.24-.55%200-1.1.25-1.71.77v5h-1.82zm18.37%206.9c-2.05%200-3.27-1.31-3.27-3.6%200-2.3%201.23-3.64%203.24-3.64%202.01%200%203.2%201.28%203.2%203.54l-.01.36h-4.64c.02%201.31.57%201.98%201.64%201.98.7%200%201.15-.28%201.58-.88l1.34.74c-.59.99-1.65%201.5-3.08%201.5zm1.37-4.52c0-.93-.53-1.48-1.4-1.48-.82%200-1.34.53-1.41%201.48zm-36.44%204.6c-1.8%200-3.44-1.15-3.44-3.67s1.63-3.67%203.44-3.67c1.82%200%203.45%201.16%203.45%203.67%200%202.52-1.64%203.67-3.45%203.67zm0-5.8c-1.36%200-1.62%201.24-1.62%202.12%200%20.88.26%202.13%201.62%202.13%201.37%200%201.63-1.24%201.63-2.13%200-.9-.26-2.12-1.63-2.12zm4.7-1.36h1.74v.81a2.7%202.7%200%20011.92-.96%201.52%201.52%200%2001.24.02v1.71h-.09c-.8%200-1.67.13-1.94.75v4.62h-1.87zm22.72%205.46c1.4%200%201.51-1.42%201.51-2.34%200-1.09-.53-1.98-1.52-1.98-.66%200-1.39.48-1.39%202.05%200%20.86.06%202.28%201.4%202.27zm3.27-5.48v6.58c0%201.17-.09%203.08-3.4%203.1-1.37%200-2.64-.54-2.9-1.73l1.81-.3c.08.35.29.7%201.31.7.95%200%201.41-.46%201.41-1.55v-.81l-.02-.03c-.3.52-.73%201.02-1.8%201.02-1.62%200-2.9-1.13-2.9-3.48%200-2.33%201.32-3.63%202.8-3.63%201.39%200%201.9.63%202.02.96h-.02l.15-.83zm8.27-2.31h-.72v1.99h-.38v-2h-.72v-.3h1.82zm3%201.99h-.38v-1.92h-.01l-.75%201.92h-.24l-.76-1.92v1.92h-.39v-2.3h.59l.68%201.75.68-1.74h.58z%27/%3e%3c/svg%3e%0a',
});

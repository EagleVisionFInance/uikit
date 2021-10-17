# 🥞 Evi UIkit

[![Version](https://img.shields.io/npm/v/@eaglevision/uikit)](https://www.npmjs.com/package/@eaglevision/uikit) [![Size](https://img.shields.io/bundlephobia/min/@eaglevision/uikit)](https://www.npmjs.com/package/@eaglevision/uikit)

Evi UIkit is a set of React components and hooks used to build pages on Evi's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @eaglevision/uikit`

## Setup

### Theme

Before using Evi UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@eaglevision/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@eaglevision/uikit'
...
<ResetCSS />
```

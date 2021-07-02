# 🌞 Suncoin UIkit

[![Version](https://img.shields.io/npm/v/@suncoin/uikit)](https://www.npmjs.com/package/@suncoin/uikit) [![Size](https://img.shields.io/bundlephobia/min/@suncoin/uikit)](https://www.npmjs.com/package/suncoin/uikit)

Suncoin UIkit is a set of React components and hooks used to build pages on Suncoin's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @suncoin/uikit`

## Setup

### Theme

Before using Suncoin UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@suncoin/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@suncoin/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://suncoinchain.github.io/suncoin-uikit/)

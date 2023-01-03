import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  common,
  error,
  primary,
  secondary,
  gray,
  orange,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@haruo-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: {
      ...common,
      ...error,
      ...primary,
      ...secondary,
      ...gray,
      ...orange,
    },

    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

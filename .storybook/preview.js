import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/defaultTheme'

const themes = [defaultTheme]

addDecorator(withThemesProvider(themes, ThemeProvider))

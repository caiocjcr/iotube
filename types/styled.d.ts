/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppTheme } from '@/styles/theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

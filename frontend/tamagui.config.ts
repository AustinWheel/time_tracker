import { config } from '@tamagui/config/v2'
import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
    size,
    space,
    zIndex,
    color,
    radius,
})

const appConfig = createTamagui({
    config,
    tokens,
    themes,
})
export type AppConfig = typeof appConfig
declare module 'tamagui' {

  interface TamaguiCustomConfig extends AppConfig {}

}
export default appConfig

// uno.config.ts
import { presetWind3, presetIcons, presetAttributify, defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS选项
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
})

// uno.config.ts
import { presetWind3, presetAttributify, defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS选项
  presets: [presetWind3(), presetAttributify()],
})

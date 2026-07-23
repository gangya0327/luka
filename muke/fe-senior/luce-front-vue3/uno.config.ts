// uno.config.ts
import {
  presetWind3,
  presetIcons,
  presetAttributify,
  defineConfig,
  transformerDirectives,
} from 'unocss'
// import transformerDirectives from '@unocss/transformer-directives'

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
  transformers: [transformerDirectives()],
  shortcuts: {
    'router-link': 'text-blue-500 hover:text-blue-700',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
  },
})

// uno.config.ts
import {
  presetWind3,
  presetIcons,
  presetAttributify,
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
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
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'router-link': 'text-blue-500 hover:text-blue-700',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    btn: 'px-4 py-2 border border-sky-400 bg-sky-400 text-white hover:bg-sky-300 cursor-pointer',
    'btn-plain':
      'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-gray-300 text-sky-500) cursor-pointer',
  },
  theme: {
    colors: {
      main: '#4e98f4',
    },
  },
})

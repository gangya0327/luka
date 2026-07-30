/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vue-router/auto" />
/// <reference types="vite-plugin-vue-layouts/client" />

declare module '*.md' {
  import type { ComponentOptions } from 'vue'

  const Component: ComponentOptions
  export default Component
}

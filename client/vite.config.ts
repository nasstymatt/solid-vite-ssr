import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin({ ssr: true })],
  server: { middlewareMode: 'ssr' },
  // @ts-ignore
  ssr: {
    noExternal: ['solid-app-router']
  }
})

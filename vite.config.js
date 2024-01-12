import { defineConfig } from '@solidjs/start/config'
import vercel from 'solid-start-vercel'
import solid from 'solid-start/vite'

export default defineConfig({
  plugins: [solid({ adapter: vercel({ edge: true }) })],
})

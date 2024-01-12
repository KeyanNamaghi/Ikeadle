import vercel from 'solid-start-vercel'
import solid from 'solid-start/vite'

export default defineConfig({
  plugins: [solid({ adapter: vercel() })],
})

import { clientOnly } from '@solidjs/start'

export default function About() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame />
    </main>
  )
}

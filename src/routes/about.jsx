import { A } from '@solidjs/router'
import { clientOnly } from '@solidjs/start'
import { Suspense } from 'solid-js'
// import Counter from '~/components/Counter'
import { createLocalStore } from '~/utils'

export default function About() {
  const ClientOnlyButton = clientOnly(() => import('~/components/Counter'))
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {/* <Counter /> */}
      <ClientOnlyButton />
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {' - '}
        <span>About Page</span>
      </p>
    </main>
  )
}

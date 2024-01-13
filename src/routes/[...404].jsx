import { A } from '@solidjs/router'
export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Not Found</h1>
      <p class="mt-8">
        Nothing to see here. <A href="/">Go home</A>.
      </p>
    </main>
  )
}

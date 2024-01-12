import { useLocation } from '@solidjs/router'
export default function Nav() {
  const location = useLocation()
  const active = path => (path == location.pathname ? 'border-ikea-yellow' : 'border-transparent hover:border-ikea-yellow')
  return (
    <nav class="bg-ikea-blue overflow-x-scroll">
      <ul class="container flex items-center p-3 text-gray-200 w-auto">
        <li class={`mx-1.5 sm:mx-6`}>
          <h1 class="text-ikea-yellow uppercase ml-auto mr-4">Ikeadle</h1>
        </li>
        <li class={`border-b-2 ${active('/')} mx-1 sm:mx-4`}>
          <a class="p-2" href="/">
            Home
          </a>
        </li>
        <li class={`border-b-2 ${active('/gb')} mx-1 sm:mx-4`}>
          <a class="p-2" href="/gb">
            UK
          </a>
        </li>
        <li class={`border-b-2 ${active('/sk')} mx-1 sm:mx-4`}>
          <a class="p-2" href="/sk">
            Slovensko
          </a>
        </li>
      </ul>
    </nav>
  )
}

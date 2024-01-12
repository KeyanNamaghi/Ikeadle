import { clientOnly } from '@solidjs/start'

export default function About() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const data = {
    image: 'https://www.ikea.com/gb/en/images/products/kalas-spoon-mixed-colours__1047763_pe843511_s5.jpg?f=xxs',
    name: 'KALAS',
    description: 'Spoon',
    price: '0.75',
    link: 'https://www.ikea.com/gb/en/p/kalas-spoon-mixed-colours-70455695/',
    subscript: '/4 pack',
  }
  const currencyData = { symbol: '£', locale: 'en-GB', currency: 'GBP' }

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...data} {...currencyData} />
    </main>
  )
}

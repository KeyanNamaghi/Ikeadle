import { clientOnly } from '@solidjs/start'

export default function SK() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const data = {
    image: 'https://www.ikea.com/sk/sk/images/products/citronhaj-korenicka-cire-sklo-nehrdzavejuca-ocel__1196248_pe902858_s5.jpg?f=xxs',
    name: 'CITRONHAJ',
    description: 'Korenička, 10 cl',
    price: '3.99',
    link: 'https://www.ikea.com/sk/sk/p/citronhaj-korenicka-cire-sklo-nehrdzavejuca-ocel-60553210/',
    subscript: '/4 ks',
  }
  const currencyData = { symbol: '€', locale: 'sk-SK', currency: 'EUR' }

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...data} {...currencyData} country="Slovensko" />
    </main>
  )
}

import { clientOnly } from '@solidjs/start'
import { gameNumber } from '~/utils'
import { data } from '~/data/ca'

export default function Page() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const currencyData = { symbol: '$', locale: 'en-CA', currency: 'CAD' }
  const day = gameNumber() % (data.length - 1)
  const daysData = data[day]

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...daysData} {...currencyData} country="Canada" day={day} />
    </main>
  )
}

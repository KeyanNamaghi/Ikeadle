import { clientOnly } from '@solidjs/start'
import { gameNumber } from '~/utils'
import { data } from '~/data/gb'

export default function About() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const currencyData = { symbol: '£', locale: 'en-GB', currency: 'GBP' }
  const day = gameNumber() % 403
  const daysData = data[day]

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...daysData} {...currencyData} country="UK" day={day} />
    </main>
  )
}

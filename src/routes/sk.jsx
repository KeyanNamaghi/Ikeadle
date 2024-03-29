import { clientOnly } from '@solidjs/start'
import { gameNumber } from '~/utils'
import { data } from '~/data/sk'

export default function Page() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const currencyData = { symbol: '€', locale: 'sk-SK', currency: 'EUR' }
  const day = gameNumber() % (data.length - 1)
  const daysData = data[day]

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...daysData} {...currencyData} country="Slovensko" day={day} />
    </main>
  )
}

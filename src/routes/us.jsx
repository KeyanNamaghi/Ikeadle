import { clientOnly } from '@solidjs/start'
import { gameNumber } from '~/utils'
import { data } from '~/data/us'

export default function Page() {
  const ClientOnlyGame = clientOnly(() => import('~/components/Game'))
  const currencyData = { symbol: '$', locale: 'en-US', currency: 'USD' }
  const day = gameNumber() % (data.length - 1)
  const daysData = data[day]

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ClientOnlyGame {...daysData} {...currencyData} country="USA" day={day} />
    </main>
  )
}

import { For, createSignal } from 'solid-js'
import { calculatePercentageDifference, createLocalStore } from '~/utils'

const Guess = ({ guess, locale, currency }) => {
  if (guess === null) {
    return <div class="h-10 rounded-xl w-full bg-ikea-interactive-dark max-w-96 m-auto" />
  }

  const { value, result } = guess
  const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(Number(value))

  if (Math.abs(result) < 5) {
    return <div class={`grid place-content-center h-10 rounded-xl w-full bg-correct text-correct-text max-w-96 m-auto relative`}>{formatted}</div>
  }

  const distance = Math.abs(result) > 25 ? 'bg-wrong text-wrong-text' : 'bg-almost text-almost-text'
  const direction = result > 0 ? '⬆️' : '⬇️'

  return (
    <div class={`grid place-content-center h-10 rounded-xl w-full ${distance} max-w-96 m-auto relative`}>
      {formatted}
      <span class="absolute right-4 top-1/2 transform -translate-y-1/2">{direction}</span>
    </div>
  )
}

const Input = ({ guess, setGuess, currency }) => {
  return (
    <div class="max-w-96 m-auto flex relative">
      <input
        class="h-6 rounded-xl min-w-0 w-full bg-ikea-interactive focus:outline-ikea-blue p-8 text-2xl font-bold shadow-md"
        inputmode="decimal"
        value={`${currency}${guess() ? guess() : ''}`}
        onInput={e => {
          const newValue = e.target.value.replace(currency, '')
          if (newValue.match(/^\d*(\.\d{0,2})?$/)) {
            setGuess(newValue)
          }
          e.target.value = `${currency}${guess() ? guess() : ''}`
        }}
      />
      <button class="h-6 py-8 px-5 rounded-xl rounded-l-none bg-ikea-blue flex items-center absolute right-0 hover:bg-ikea-blue-dark">
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="svg-icon">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.98 15.395a6.294 6.294 0 111.414-1.414l4.602 4.601-1.414 1.414-4.602-4.601zm.607-5.101a4.294 4.294 0 11-8.587 0 4.294 4.294 0 018.587 0z"
            fill="white"></path>
        </svg>
      </button>
    </div>
  )
}

export default function ClientOnlyGame() {
  const { symbol, locale, currency } = { symbol: '£', locale: 'en-GB', currency: 'GBP' }
  const [guesses, setGuesses] = createLocalStore('guesses', [null, null, null, null, null, null])
  const [result, setResult] = createLocalStore('result', { state: 'PLAYING' })
  const [guess, setGuess] = createSignal('')

  const { image, name, description, price, link, subscript } = {
    image: 'https://www.ikea.com/gb/en/images/products/kalas-spoon-mixed-colours__1047763_pe843511_s5.jpg?f=xxs',
    name: 'KALAS',
    description: 'Spoon',
    price: '0.75',
    link: 'https://www.ikea.com/gb/en/p/kalas-spoon-mixed-colours-70455695/',
    subscript: '/4 pack',
  }

  const onSubmit = e => {
    e.preventDefault()
    if (guess() === '0') return

    const diff = calculatePercentageDifference(guess(), price)

    const updatedGuesses = [...guesses]
    const index = updatedGuesses.findIndex(g => g === null)
    updatedGuesses[index] = { value: guess(), result: diff }

    if (Math.abs(diff) < 5) {
      setResult({ state: 'WON' })
    } else if (updatedGuesses.every(g => g !== null)) {
      setResult({ state: 'LOST' })
    }

    setGuesses(updatedGuesses)
    setGuess('')
  }

  return (
    <div>
      <img src={image} alt={name} class="w-[200px] h-52 mx-auto mb-2" />
      <h2 class="text-center font-bold">{name}</h2>
      <p class="text-center">{description}</p>
      <p class="text-center text-2xl font-bold">??? {subscript}</p>
      <div class="flex gap-2 flex-col my-4">
        <For each={guesses}>{guess => <Guess guess={guess} locale={locale} currency={currency} />}</For>
      </div>
      <form onSubmit={onSubmit}>
        <Input guess={guess} setGuess={setGuess} currency={symbol} />
      </form>
    </div>
  )
}

import { For, createSignal } from 'solid-js'
import { calculatePercentageDifference, createLocalStore, gameNumber } from '~/utils'

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

const Input = ({ guess, setGuess, symbol }) => {
  return (
    <div class="max-w-96 m-auto flex relative">
      <input
        class="h-16 rounded-xl min-w-0 w-full bg-ikea-interactive focus:outline-ikea-blue py-3 px-12 text-2xl font-bold shadow-md"
        inputmode="decimal"
        value={guess()}
        onInput={e => {
          const newValue = e.target.value.replace(symbol, '')
          if (newValue.match(/^\d*(\.\d{0,2})?$/)) {
            setGuess(newValue)
          }
          e.target.value = guess()
        }}
      />
      <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-ikea-blue">{symbol}</span>
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

export default function ClientOnlyGame({ image, name, description, price, link, subscript, symbol, locale, currency }) {
  const day = gameNumber()
  const [game, setGame] = createLocalStore('game', { state: 'PLAYING', guesses: [null, null, null, null, null, null], day })
  const [guess, setGuess] = createSignal('')

  const onSubmit = e => {
    e.preventDefault()
    if (guess() === '0') return

    const diff = calculatePercentageDifference(guess(), price)

    const updatedGuesses = [...game.guesses]
    const index = updatedGuesses.findIndex(g => g === null)
    updatedGuesses[index] = { value: guess(), result: diff }

    if (Math.abs(diff) < 5) {
      setGame({ state: 'WON', guesses: updatedGuesses })
    } else if (updatedGuesses.every(g => g !== null)) {
      setGame({ state: 'LOST', guesses: updatedGuesses })
    } else {
      setGame({ state: 'PLAYING', guesses: updatedGuesses })
    }

    setGuess('')
  }

  return (
    <div>
      <img src={image} alt={name} class="w-[200px] h-52 mx-auto mb-2" />
      <h2 class="text-center font-bold">{name}</h2>
      <p class="text-center">{description}</p>
      <p class="text-center text-2xl font-bold">
        {game.state === 'PLAYING' ? '???' : new Intl.NumberFormat(locale, { style: 'currency', currency }).format(Number(price))} <span class="text-base">{subscript}</span>
      </p>
      <div class="flex gap-2 flex-col my-4">
        <For each={game.guesses}>{guess => <Guess guess={guess} locale={locale} currency={currency} />}</For>
      </div>
      {game.state === 'PLAYING' && (
        <form onSubmit={onSubmit}>
          <Input guess={guess} setGuess={setGuess} symbol={symbol} />
        </form>
      )}
    </div>
  )
}

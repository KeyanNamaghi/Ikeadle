import { For, createSignal } from 'solid-js'
import { calculatePercentageDifference, createLocalStore } from '~/utils'
import { Guess, Help, Input, Share, Stats } from '.'

export default function Game({ image, name, description, price, link, subscript, symbol, locale, currency, country, day }) {
  const [game, setGame] = createLocalStore(`game-${locale}`, { state: 'PLAYING', guesses: [null, null, null, null, null, null], day })
  const [stats, setStats] = createLocalStore(`stats-${locale}`, { numGames: 0, numWins: 0, currentStreak: 0, maxStreak: 0, winsRecord: [0, 0, 0, 0, 0, 0] })
  const [guess, setGuess] = createSignal('')
  const [showStats, setShowStats] = createSignal(false)
  const [showHelp, setShowHelp] = createSignal(false)

  const onSubmit = e => {
    e.preventDefault()
    if (guess() === '0' || guess() === '') return

    const diff = calculatePercentageDifference(guess(), price)

    const updatedGuesses = [...game.guesses]
    const index = updatedGuesses.findIndex(g => g === null)
    updatedGuesses[index] = { value: guess(), result: diff }

    if (Math.abs(diff) < 5) {
      setGame({ state: 'WON', guesses: updatedGuesses })
      setStats({
        ...stats,
        numGames: stats.numGames + 1,
        numWins: stats.numWins + 1,
        currentStreak: stats.currentStreak + 1,
        maxStreak: Math.max(stats.maxStreak, stats.currentStreak + 1),
        winsRecord: stats.winsRecord.map((w, i) => (i === index ? w + 1 : w)),
      })
    } else if (updatedGuesses.every(g => g !== null)) {
      setGame({ state: 'LOST', guesses: updatedGuesses })
      setStats({ ...stats, numGames: stats.numGames + 1, currentStreak: 0, winsRecord: [...stats.winsRecord.slice(1), 0] })
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
      {game.state === 'PLAYING' ? (
        <form onSubmit={onSubmit}>
          <Input guess={guess} setGuess={setGuess} symbol={symbol} />
        </form>
      ) : (
        <Share state={game.state} guesses={game.guesses} day={day} country={country} />
      )}
      <div class="flex gap-2 justify-center items-center">
        <button class="h-6 py-8 px-5 text-ikea-blue font-bold text-base" onClick={() => setShowHelp(true)}>
          Help
        </button>
        <button class="h-6 py-8 px-5 text-ikea-blue font-bold text-base" onClick={() => setShowStats(true)}>
          Stats
        </button>
      </div>
      {showHelp() && <Help handleClose={setShowHelp} />}
      {showStats() && <Stats handleClose={setShowStats} {...stats} />}
    </div>
  )
}

export const Guess = ({ guess, locale, currency }) => {
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

export const Input = ({ guess, setGuess, symbol }) => {
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

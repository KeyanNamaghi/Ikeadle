import { createEffect } from 'solid-js'
import { confetti } from '@tsparticles/confetti'

export const Share = ({ state, guesses, day, country }) => {
  createEffect(() => {
    if (state === 'WON') {
      confetti()
    }
  })

  const share = () => {
    const result = guesses
      .map(guess => {
        if (guess === null) return
        const { result } = guess
        if (Math.abs(result) < 5) return '🟢'
        if (result > 25) return '⬆️🔴'
        if (result < -25) return '⬇️🔴'
        if (result > 0) return '⬆️🟡'
        return '⬇️🟡'
      })
      .filter(Boolean)
      .join('')

    const shareText = `Ikeadle ${country} #${day} ${result} - ${window.location.href}`

    navigator.clipboard
      .writeText(shareText)
      .then(function () {
        alert('Copied to clipboard: ' + shareText)
      })
      .catch(function (err) {
        console.error('Unable to copy text to clipboard', err)
      })
  }

  return (
    <div>
      <p class="text-center text-2xl font-bold mb-4">{state === 'WON' ? 'Congratulations!' : 'Better luck next time'}</p>
      <button
        class="h-6 py-8 px-5 mx-auto max-w-96 w-full rounded-xl bg-ikea-blue flex gap-2 justify-center items-center right-0 hover:bg-ikea-blue-dark text-white font-bold"
        onClick={share}>
        <span>Share</span>
        <svg fill="#fff" height="16px" width="16px" viewBox="0 0 481.6 481.6">
          <path d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8 c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5 l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9 l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1 c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100,299.8 c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.5,299.8,100,299.8z M381.6,454.5 c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z" />
        </svg>
      </button>
    </div>
  )
}

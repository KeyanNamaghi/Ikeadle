import { createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'

export function createLocalStore(name, init) {
  if (typeof window === 'undefined') return createStore(init)
  const localState = localStorage.getItem(name)
  const parsed = JSON.parse(localState)
  const isNewDay = parsed?.day !== init.day

  if (isNewDay) {
    localStorage.setItem(name, JSON.stringify(init))
  }

  const [state, setState] = createStore(localState && !isNewDay ? parsed : init)
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)))
  return [state, setState]
}

export function calculatePercentageDifference(value, guess) {
  return ((guess - value) / Math.abs(value)) * 100
}

export const gameNumber = () => {
  const startDate = new Date('2024-01-12')
  const currentDate = new Date()
  const timeDifference = currentDate - startDate
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 530
}

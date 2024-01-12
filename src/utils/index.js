import { createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'

export function createLocalStore(name, init) {
  if (typeof window === 'undefined') return createStore(init)
  const localState = localStorage.getItem(name)
  const [state, setState] = createStore(localState ? JSON.parse(localState) : init)
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)))
  return [state, setState]
}

export function calculatePercentageDifference(value, guess) {
  return ((guess - value) / Math.abs(value)) * 100
}

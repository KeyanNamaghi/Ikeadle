import { createSignal } from 'solid-js'
import { createLocalStore } from '~/utils'
// export default function Counter() {
//   const [count, setCount] = createSignal(0)
//   return (
//     <button
//       class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
//       onClick={() => setCount(count() + 1)}>
//       Clicks: {count()}
//     </button>
//   )
// }

export default function ClientOnlyButton() {
  const [todos, setTodos] = createLocalStore('todos', { count: 0 })
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => {
        setTodos({ count: +todos.count + 1 })
        console.log(todos.count)
      }}>
      Clicks: {todos?.count}
    </button>
  )
}

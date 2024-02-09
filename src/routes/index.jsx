export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Ikeadle</h1>
      <div class="flex flex-col items-center justify-start flex-auto text-base gap-2 mb-12">
        <div>
          <p class="my-2 text-3xl font-bold">Guess the price of an item from Ikea in 6 tries</p>
          <p class="my-2 text-base">A new Ikeadle is available every day!</p>
        </div>
      </div>
      <div class="flex flex-col w-80 m-auto gap-6">
        <a class="flex-auto" href="/gb">
          <div class="flex justify-center rounded-full shadow-lg p-4 text-2xl bg-ikea-blue hover:bg-ikea-blue-dark text-white">United Kingdom</div>
        </a>
        <a class="flex-auto" href="/sk">
          <div class="flex justify-center rounded-full shadow-lg p-4 text-2xl bg-ikea-blue hover:bg-ikea-blue-dark text-white">Slovensko</div>
        </a>
        <a class="flex-auto" href="/ca">
          <div class="flex justify-center rounded-full shadow-lg p-4 text-2xl bg-ikea-blue hover:bg-ikea-blue-dark text-white">Canada</div>
        </a>
        <a class="flex-auto" href="/us">
          <div class="flex justify-center rounded-full shadow-lg p-4 text-2xl bg-ikea-blue hover:bg-ikea-blue-dark text-white">USA</div>
        </a>
      </div>
    </main>
  )
}

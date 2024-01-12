import { Guess } from '.'
import { Modal } from './Modal'

export const Help = ({ handleClose }) => {
  return (
    <Modal handleClose={handleClose}>
      <div class="flex flex-col items-center justify-start flex-auto text-base gap-2">
        <h2 class="font-bold text-3xl">Help</h2>
        <div>
          <p class="my-2">Guess the Ikeadle in 6 tries. </p>
          <p class="my-2">A new Ikeadle is available every day!</p>
        </div>
        <h3 class="font-bold text-xl">Example</h3>
        <p class="my-2">First guess of £5.00 is more than 25% below the actual price</p>
        <Guess guess={{ value: 5, result: 50 }} locale="en-GB" currency="GBP" />
        <p class="my-2">Second guess of £12.00 is too high now but within 25% of the actual price</p>
        <Guess guess={{ value: 12, result: -20 }} locale="en-GB" currency="GBP" />
        <p class="my-2">If you guess within 5% of the price, you win!</p>
        <Guess guess={{ value: 10, result: 0 }} locale="en-GB" currency="GBP" />
        <p class="my-2">
          Special thanks to all the dles but{' '}
          <a class="text-ikea-blue font-bold" href="https://costcodle.com/">
            COSTCODLE
          </a>{' '}
          in particular!
        </p>
        <p class="my-2">
          Check out my Argos themed version:{' '}
          <a class="text-ikea-blue font-bold" href="https://www.argdle.keyan.dev/">
            Argdle
          </a>
        </p>
        <p class="my-2">
          Created by{' '}
          <a class="text-ikea-blue font-bold" href="https://www.keyan.dev/me">
            Keyan
          </a>
        </p>
      </div>
    </Modal>
  )
}

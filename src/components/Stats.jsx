import { Modal } from './Modal'

export const Stats = ({ numGames, numWins, currentStreak, maxStreak, winsRecord, handleClose }) => {
  const barLengths = winsRecord.map(wins => {
    const percentage = (100 * wins) / (numWins || 1)
    return `${percentage > 8 ? percentage : 8}%`
  })

  return (
    <Modal handleClose={handleClose}>
      <div class="flex flex-col items-center justify-start flex-auto text-base gap-2">
        <h2 class="font-bold text-3xl">Stats</h2>
        <div class="grid grid-cols-4 gap-4 p-4">
          <div>
            <p class="font-bold text-2xl">{numGames}</p>
            <p>Played</p>
          </div>
          <div>
            <p class="font-bold text-2xl">{numWins}</p>
            <p>Won</p>
          </div>
          <div>
            <p class="font-bold text-2xl">{currentStreak}</p>
            <p>Current Streak</p>
          </div>
          <div>
            <p class="font-bold text-2xl">{maxStreak}</p>
            <p>Max Streak</p>
          </div>
        </div>
        <div class="grid grid-cols-[50px,200px] gap-4 my-4 p-8">
          <div>
            1<sup>st</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[0]};`}>
            {winsRecord[0]}
          </div>
          <div>
            2<sup>nd</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[1]};`}>
            {winsRecord[1]}
          </div>
          <div>
            3<sup>rd</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[2]};`}>
            {winsRecord[2]}
          </div>
          <div>
            4<sup>th</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[3]};`}>
            {winsRecord[3]}
          </div>
          <div>
            5<sup>th</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[4]};`}>
            {winsRecord[4]}
          </div>
          <div>
            6<sup>th</sup>
          </div>
          <div class="flex items-center justify-end pr-6 text-base text-white bg-blue-600 rounded-md" style={`width: ${barLengths[5]};`}>
            {winsRecord[5]}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export const Modal = ({ children, handleClose }) => {
  const onClick = e => {
    console.log(e.target.id)
    if (e.target.id === 'modal-background') {
      console.log('closing')
      handleClose(false)
    }
  }
  return (
    <div id="modal-background" class="fixed top-0 left-0 z-100 w-screen h-screen bg-black bg-opacity-50 grid place-items-center" onClick={onClick}>
      <div class="bg-white p-8 rounded-2xl flex flex-col items-center justify-center gap-4 z-1000 w-max(300px, 30vw) min-h-[80vh]">{children}</div>
    </div>
  )
}

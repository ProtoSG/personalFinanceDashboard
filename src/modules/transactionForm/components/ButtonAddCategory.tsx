export const ButtonAddCategory = () => {
  const handleOpenModal = () => {
    const modal = document.getElementById("addCategory") as HTMLDialogElement
    modal.showModal()
  }

  return (
    <button
      type="button"
      className="absolute right-0 px-2 font-semibold text-gray-200 bg-black rounded-md transition-colors hover:bg-black/70 "
      onClick={handleOpenModal}
    >
      +
    </button>
  )
}

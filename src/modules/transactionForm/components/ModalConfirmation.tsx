export const ModalConfirmation = () => {

  const handleCloseModal = () => {
    const modal = document.getElementById("confimation") as HTMLDialogElement
    modal.close()
  }

  return (
    <dialog id="confimation" className="m-auto backdrop:backdrop-blur-xl px-12 py-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Confirmación</h2>
        <p className="text-gray-500">¿Estás seguro de que deseas agregar este registro?</p>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="w-full px-4 py-3 font-semibold text-xl  border-2 rounded-md transition-colors hover:bg-zinc-200"
            onClick={handleCloseModal}
          >
            No
          </button>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-xl text-gray-200 bg-black rounded-md transition-colors hover:bg-black/70"
            onClick={handleCloseModal}
          >
            Sí
          </button>
        </div>
      </div>
    </dialog>
  )
}

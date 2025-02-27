export const ModalAddCategory = () => {
  const handleCloseModal = () => {
    const modal = document.getElementById("addCategory") as HTMLDialogElement
    modal.close()
  }

  return (
    <dialog id="addCategory" className="m-auto backdrop:backdrop-blur-xl px-12 py-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Agregar categoría</h2>
        <form>
          <input type="text" placeholder="Nombre de la categoría" className="border-2 border-gray-300 w-full rounded-md pl-2 py-2 focus:outline-none" />
        </form>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="w-full px-4 py-3 font-semibold text-xl  border-2 rounded-md transition-colors hover:bg-zinc-200  focus:outline-none"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-xl text-gray-200 bg-black rounded-md transition-colors hover:bg-black/70 focus:outline-none"
            onClick={handleCloseModal}
          >
            Agregar
          </button>
        </div>
      </div>
    </dialog>
  )
}

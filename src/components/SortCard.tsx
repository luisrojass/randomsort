import { useConfig } from "../store/local/useConfig"
import { NameInput } from "../types/types"

type SortCard = {
  elem: NameInput
  index: number
}

function SortCard({ elem, index }: SortCard) {
  const { theme } = useConfig()

  return (
    <div className='col mb-4'>
      <div className="input-group">
        <button
          className="btn btn-secondary w-25 shadow"
          disabled
          onClick={() => { }}>
          {index}
        </button>
        <input type="text"
          className={
            `form-control shadow
              ${theme === "dark"
              ? "bg-dark border-secondary text-bg-dark"
              : "bg-light text-bg-light"}
            `
          }
          value={elem.name}
          readOnly
          disabled
          onChange={() => { }} />
      </div>
    </div>
  )
}

export default SortCard
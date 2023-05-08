import { BsTrashFill } from 'react-icons/bs'
import { useConfig } from '../store/local/useConfig'
import { NameInput } from '../types/types'

interface NameCardInterface {
  elem: NameInput

  delFunc: (id: string) => void

  onChange: (id: string, name: string) => void
}

function NameCard (
  { elem, delFunc, onChange }: NameCardInterface
): JSX.Element {
  const { theme } = useConfig()

  return (
    <div className='col mb-4'>
      <div className='input-group'>
        <input
          type='text'
          className={`form-control shadow bg-${theme} text-bg-${theme} ${theme === 'dark' ? 'border-secondary' : ''}`}
          placeholder='Name...'
          value={elem.name}
          autoFocus
          onChange={e => onChange(elem.id, e.target.value)}
        />
        <button
          className='btn btn-danger shadow'
          onClick={() => delFunc(elem.id)}
        >
          <BsTrashFill />
        </button>
      </div>
    </div>
  )
}

export default NameCard

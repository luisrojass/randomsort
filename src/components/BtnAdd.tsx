import { FaPlus } from 'react-icons/fa'

interface BtnAction {
  action: () => void
}

function BtnAdd ({ action }: BtnAction): JSX.Element {
  return (
    <div className='col mb-4'>
      <button
        className='btn btn-primary w-100 shadow'
        onClick={action}
      >
        <FaPlus />
      </button>
    </div>
  )
}

export default BtnAdd

import { useNavigate } from 'react-router-dom'
import { useConfig } from '../store/local/useConfig'

function NotFoundPage (): JSX.Element {
  const { theme } = useConfig()
  const navigate = useNavigate()

  return (
    <div className={`py-5 bg-${theme}`}>
      <h2 className={`py-4 text-center text-${theme === 'dark' ? 'light' : 'dark'}`}>404 Not found</h2>

      <button
        className='btn btn-secondary w-auto d-block mx-auto shadow'
        onClick={() => navigate('/')}
      >
        Go home
      </button>
    </div>
  )
}

export default NotFoundPage

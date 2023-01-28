import { useNavigate } from 'react-router-dom';
import { useConfig } from '../store/local/useConfig';

function NotFoundPage() {
  const { theme } = useConfig()
  const navigate = useNavigate()

  return (
    <div className={`py-5 bg-${theme}`}>
      <h2 className={`py-3 text-center text-bg-${theme}`} >404 Not found</h2>

      <button
        className='btn btn-secondary w-auto d-block mx-auto shadow'
        onClick={() => navigate('/')}>
        Go home
      </button>
    </div>
  )
}

export default NotFoundPage
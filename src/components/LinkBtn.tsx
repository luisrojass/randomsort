import { useConfig } from '../store/local/useConfig'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface LinkBtn {
  IconLight: IconType
  IconDark: IconType
  action: () => void
}

function FooterBtn({ IconLight, IconDark, action }: LinkBtn) {
  const { theme } = useConfig()

  return (
    <button style={{ width: '3rem' }}
      className={`btn border-0 mx-2 my-0 py-0`}
      onClick={action}>

      <h2 className={`h2 text-bg-${theme}`}>
        {theme === 'dark' ? <IconLight /> : <IconDark />}
      </h2>
    </button>
  )
}

export default FooterBtn
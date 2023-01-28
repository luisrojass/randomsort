import { useLocation, useNavigate } from 'react-router-dom'
import { BsShuffle } from 'react-icons/bs'

import ShortCutLight from '../assets/shortcut-light.svg'
import ShortCutDark from '../assets/shortcut-dark.svg'

import { useConfig } from '../store/local/useConfig'
import { useSort } from '../store/temporal/useSort'
import { useNameList } from '../store/local/useNameList'
import { useModal } from '../store/temporal/useModal'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { openModal } = useModal()
  const { sort } = useSort()
  const { nameList } = useNameList()
  const {
    theme,
    quantityToSort,
    changeQuantityToSort
  } = useConfig()

  return (
    <header className={`position-fixed fixed-top py-lg-1 w-100 bg-${theme}
    ${theme === 'dark'
        ? 'border-bottom border-secondary'
        : 'shadow'}`}>
      <div className='d-flex justify-content-center'>

        <div className='d-inline-flex justify-content-center py-3 py-lg-2'>
          <img style={{ width: '2rem' }} className='d-none d-sm-flex'
            src={theme === 'dark'
              ? ShortCutLight
              : ShortCutDark} />
          <h2 className={`mt-1 mt-lg-2 mx-2 text-center text-bg-${theme}`}>
            RandomSort
          </h2>
        </div>

        {(pathname === '/') || (pathname === '/sort')
          ? <div className='btn-group d-inline-flex justify-content-center py-3 mt-0 mt-lg-1 mx-2' role='group'>
            <div className='input-group'>
              <input type='number'
                style={{ width: '4rem' }}
                className={`form-control shadow-sm bg-${theme} text-bg-${theme} ${theme === 'dark' ? 'border-secondary' : ''}`}
                value={quantityToSort}
                min={1}
                onChange={e => changeQuantityToSort(parseInt(e.target.value))} />
              <button style={{ width: '3rem' }}
                className='btn btn-primary shadow-sm'
                onClick={() => {
                  sort({
                    nameList,
                    quantityToSort,
                    openModal,
                    navigate
                  })
                }}>
                <BsShuffle />
              </button>
            </div>
          </div>
          : null
        }

      </div>
    </header>
  )
}

export default Header
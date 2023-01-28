import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { MdGroup } from 'react-icons/md'
import {
  BsMoonFill,
  BsSun,
  BsTrashFill,
  BsGithub
} from 'react-icons/bs'

import LinkBtn from './LinkBtn'
import { useConfig } from '../store/local/useConfig';
import { useNameList } from '../store/local/useNameList';
import { useModal } from '../store/temporal/useModal';

function Footer() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { theme, changeTheme } = useConfig()
  const { deleteAllNames } = useNameList()
  const { openModal } = useModal()

  return (
    <footer className={`position-fixed fixed-bottom w-100 bg-${theme}
    ${theme === 'dark'
        ? 'border-top border-secondary'
        : 'shadow-lg'}`}>
      <div className='btn-toolbar d-flex justify-content-center py-3' role='toolbar'>

        {/* DELETE ALL NAMES */}
        {pathname === '/'
          ? <LinkBtn
            IconLight={BsTrashFill}
            IconDark={BsTrashFill}
            action={() => {
              openModal({
                msg: "You'll delete all inputs, are you sure?",
                showBtn: true,
                action: deleteAllNames
              })
            }}
          />
          : null}

        {/* GO TO GROUPS PAGE */}
        {pathname !== '/groups'
          ? <LinkBtn
            IconLight={MdGroup}
            IconDark={MdGroup}
            action={() => navigate('/groups')}
          />
          : null}


        {/* GO TO HOME PAGE */}
        {pathname !== '/'
          ? <LinkBtn
            IconLight={AiFillHome}
            IconDark={AiFillHome}
            action={() => navigate('/')}
          />
          : null}


        {/* CHANGE THEME */}
        <LinkBtn
          IconLight={BsSun}
          IconDark={BsMoonFill}
          action={changeTheme}
        />

        {/* GITHUB LINK */}
        <LinkBtn
          IconLight={BsGithub}
          IconDark={BsGithub}
          action={() => window.location.assign('https://github.com/luisrojass')}
        />
      </div>
    </footer>
  )
}

export default Footer
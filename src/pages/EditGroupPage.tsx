import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import NameCard from '../components/NameCard'
import BtnAdd from '../components/BtnAdd'
import { useConfig } from '../store/local/useConfig'
import { useGroupList } from '../store/local/useGroupList'

function EditGroupPage (): JSX.Element {
  const { theme } = useConfig()
  const {
    currentGroup,
    editGroupTitle,
    createNameInGroup,
    editNameInGroup,
    deleteNameInGroup
  } = useGroupList()

  const navigate = useNavigate()

  useEffect(() => {
    if (currentGroup.id === '') navigate('/')
  }, [])

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4
    row-cols-xxl-5 gx-3 mt-5 py-0 py-lg-2 pb-5 px-5'
    >
      <div className='col mb-4'>
        <div className='input-group shadow'>
          <input
            type='text'
            className={
              `form-control text-center bg-${theme} text-bg-${theme}
              ${theme === 'dark' ? 'border-secondary' : ''}`
            }
            placeholder='My new group...'
            value={currentGroup.title}
            onChange={e => editGroupTitle(currentGroup.id, e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <BtnAdd action={() => createNameInGroup()} />
      {currentGroup.members.map(member => (
        <NameCard
          key={member.id} elem={member}
          delFunc={deleteNameInGroup} onChange={editNameInGroup}
        />
      ))}
    </div>
  )
}

export default EditGroupPage

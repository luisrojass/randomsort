import { useNavigate } from 'react-router-dom'

import { useConfig } from '../store/local/useConfig'
import { useGroupList } from '../store/local/useGroupList'
import GroupCard from '../components/GroupCard'
import BtnAdd from '../components/BtnAdd'

function GroupList() {

  const {theme} = useConfig()
  const {
    groupList,
    createGroup
  } = useGroupList()

  const navigate = useNavigate()

  return (
    <>
      <h2 className={`mt-5 text-center text-bg-${theme}`}>Groups</h2>

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 gx-3 mt-4 px-3 px-lg-5'>
        <BtnAdd action={() => {
          createGroup()
          navigate('/edit-group')
        }} />
        {groupList.map((group, i) => (
          <GroupCard key={group.id} group={group} index={i} />
        ))}
      </div>
    </>
  )
}

export default GroupList
import { BsTrashFill, BsPencilFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

import { useGroupList } from '../store/local/useGroupList';
import { GroupInput } from "../types/types";
import { useNameList } from "../store/local/useNameList";

interface GroupCard {
  group: GroupInput
  index: number
}

function GroupCard({ group, index }: GroupCard) {
  const {
    deleteGroup,
    setCurrentGroup
  } = useGroupList()
  const {selectGroup} = useNameList()
  const navigate = useNavigate()

  return (
    <div className='col mb-4'>
      <div className="input-group">
        <input type="text"
          className="form-control bg-success text-bg-success border-0 shadow pointer"
          placeholder="Name..."
          value={group.title}
          readOnly
          role="button"
          onClick={() => {
            selectGroup(group)
            navigate('/')
          }} />

        <button
          className="btn btn-warning shadow"
          onClick={() => {
            setCurrentGroup(group)
            navigate('/edit-group')
          }}>
          <BsPencilFill />
        </button>

        <button
          className="btn btn-danger shadow"
          onClick={() => deleteGroup(group.id)}>
          <BsTrashFill />
        </button>
      </div>
    </div>
  )
}

export default GroupCard
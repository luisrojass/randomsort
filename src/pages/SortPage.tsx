import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SortCard from '../components/SortCard'
import { useSort } from '../store/temporal/useSort'

function SortList (): JSX.Element {
  const { sortList } = useSort()
  const navigate = useNavigate()

  useEffect(() => {
    if (sortList.length < 1) navigate('/')
  }, [])

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 gx-3 mt-5 pt-0 pt-lg-2 pb-5 px-3 px-lg-5'>
      {sortList.map((elem, i) => (
        <SortCard key={elem.id} elem={elem} index={i + 1} />
      ))}
    </div>
  )
}

export default SortList

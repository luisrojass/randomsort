import BtnAdd from '../components/BtnAdd'
import NameCard from '../components/NameCard'
import { useNameList } from '../store/local/useNameList'

function HomePage (): JSX.Element {
  const {
    nameList,
    editName,
    deleteName,
    createName
  } = useNameList()

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 mt-5 pt-0 pt-lg-2 pb-5 px-3 px-lg-5'>
      <BtnAdd action={createName} />

      {nameList.map(el => (
        <NameCard key={el.id} elem={el} delFunc={deleteName} onChange={editName} />
      ))}
    </div>
  )
}

export default HomePage

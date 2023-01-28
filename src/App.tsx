import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import { useConfig } from './store/local/useConfig'
import Header from './components/Header'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import GroupsPage from './pages/GroupsPage'
import EditGroupPage from './pages/EditGroupPage'
import SortPage from './pages/SortPage'
import NotFoundPage from './pages/NotFoundPage'
import Modal from './components/Modal'

function App() {
  const { theme } = useConfig()

  return (
    <div style={{ height: '100vh' }} className={`bg-${theme}`}>

      <BrowserRouter>
        <div className="container-fluid h-100 p-5">
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/groups' element={<GroupsPage />} />

            <Route path='/edit-group' element={<EditGroupPage />} />

            <Route path='/sort' element={<SortPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>

          <Modal />

          <Navbar />
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App

import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import News from './components/News/News'
import Media from './components/Media/Media'
import Setting from './components/Setting/Setting'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import Friends from './components/Friends/Friends';

function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main container">
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile'
              element={<Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/media' element={<Media />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/friends/*' element={<Friends state={props.state.sidebar} />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App

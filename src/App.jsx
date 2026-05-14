import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Fishes from './pages/Fishes'
import NewFish from './pages/NewFish' 
import SingleFish from './pages/SingleFish'


function App() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/" className="btn btn-primary m-2">Főoldal</NavLink>
          <NavLink to="/halak" className="btn btn-primary m-2">Halak</NavLink>
          <NavLink to="/ujhal" className="btn btn-primary m-2">Új hal</NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/halak" element={<Fishes/>} />
        <Route path="/ujhal" element={<NewFish/>} />
        <Route path="/hal/:id" element={<SingleFish/>} />
      </Routes>
    </>
  )
}

export default App

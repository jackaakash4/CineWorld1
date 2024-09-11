import './App.css'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import MovieList from '../pages/MovieList/MovieList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
     <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/admin' element={<AdminDashboard />}></Route>
     </Routes>
    </Router>
  );
}

export default App

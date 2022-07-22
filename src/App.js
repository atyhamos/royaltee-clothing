import './components/category-item/categories.styles.scss'
import Home from './routes/home/Home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation.component.jsx'
import Authentication from './routes/authentication/Authentication.component'

const Shop = () => {
  return (
    <div>
      <div>
        <h1>Shop</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App

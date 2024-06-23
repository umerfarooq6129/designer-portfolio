import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />

          </Routes>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
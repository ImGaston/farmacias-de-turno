import Header from './components/Header'
import Footer from './components/Footer'
import Pharmacy from './components/Pharmacy'
import { MapList } from './components/MapList'

function App() {
  return (
    <div className="App">
      <Header />
      <MapList className='leaflet-container'/>
      <Pharmacy />
      <Footer />
    </div>
  )
}

export default App

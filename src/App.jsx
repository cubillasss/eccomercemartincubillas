
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='NavBar'>
      <NavBar />
      <ItemListContainer greeting={'Welcome'} />
    </div>
  )
}

export default App
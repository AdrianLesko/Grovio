import { useState, createContext} from 'react'
import './App.css'
import Header from './components/UI/Header'
import Hero from './components/UI/Hero'
import Footer from './components/UI/Footer'
import Modal from './components/UI/Modal'
import AddForm from './components/UI/AddForm'

export const ItemContext = createContext(null)

function App() {
  
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  

  const addItem = (newItem) => {
    setItems(prev => [newItem, ...prev]);
  };

  const deleteItem = (idToDelete) => {
    setItems( prev => prev.filter(item => item.id !== idToDelete))
  }


  const toggleItem = () => {

  }

  const updateItem = () => {} 

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalType === 'add' && <AddForm addItem={addItem} setIsOpen={setIsOpen} />}
      </Modal>

      <div className='flex flex-col h-screen'>
          <Header />
          <ItemContext.Provider value={{items, setModalType, setIsOpen, deleteItem}}>
            <Hero />
          </ItemContext.Provider>
          <Footer />
      </div>
    </>
  )
}

export default App

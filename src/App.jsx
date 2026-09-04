import { useState, createContext} from 'react'
import './App.css'
import Header from './components/UI/Header'
import Hero from './components/UI/Hero'
import Footer from './components/UI/Footer'
import Modal from './components/UI/Modal'
import AddForm from './components/UI/AddForm'
import EditForm from './components/UI/EditForm'

export const ItemContext = createContext(null)

function App() {
  
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [itemToEdit, setItemToEdit] = useState(null)
  

  const addItem = (newItem) => {
    setItems(prev => [newItem, ...prev]);
  };

  const deleteItem = (idToDelete) => {
    setItems( prev => prev.filter(item => item.id !== idToDelete))
  }


  const toggleItem = (itemToToggle) => {
    setItems(prev => prev.map(item => {
      return item.id === itemToToggle.id ? 
        {...item, isBought: !itemToToggle.isBought} :
        item
    }))
  }

  const openEdit = (item) => {
    setItemToEdit(item)
    setModalType('edit')
    setIsOpen(true)
  } 

  const updateItem = (newItem) => {
    setItems(prev => prev.map(item => {
      return item.id === newItem.id ? newItem : item
    }))
    setIsOpen(false)
    setItemToEdit(null)
    setModalType(null)
  }

  return (
    <>
      <ItemContext.Provider value={{items, setModalType, setIsOpen, addItem, updateItem, deleteItem, toggleItem, openEdit, itemToEdit}}>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {modalType === 'add' && <AddForm />}
          {modalType === 'edit' && <EditForm />}
        </Modal>

        <div className='flex flex-col h-screen'>
            <Header />
            
              <Hero />
            
            <Footer />
        </div>
      </ItemContext.Provider>
    </>
  )
}

export default App

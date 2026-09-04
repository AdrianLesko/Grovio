
import './App.css'
import Header from './components/UI/Header'
import Hero from './components/UI/Hero'
import Footer from './components/UI/Footer'
import Modal from './components/UI/Modal'
import AddForm from './components/UI/AddForm'
import EditForm from './components/UI/EditForm'
import {useItems} from './hooks/useItems'
import {ItemContext} from './context/ItemContext'



function App() {
  const { items,
    isOpen, setIsOpen,
    modalType, setModalType, 
    itemToEdit, 
    addItem, deleteItem, toggleItem, openEdit, updateItem} = useItems()

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

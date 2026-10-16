
import './App.css'
import Header from './components/UI/Header'
import Hero from './components/UI/Hero'
import Footer from './components/UI/Footer'
import Modal from './components/UI/Modal'
import AddForm from './components/UI/AddForm'
import EditForm from './components/UI/EditForm'
import {useItems} from './hooks/useItems'
import {ItemContext} from './context/ItemContext'
import ToastError from './components/UI/Toast.jsx'


function App() {
  const { 
    error,
    setError,
    items,
    isOpen,
    setIsOpen, 
    isLoading,
    modalType, 
    setModalType, 
    itemToEdit, 
    addItem, deleteItem, toggleItem, openEdit, updateItem} = useItems()

  return (
    <>
      <ItemContext.Provider value={{items, setModalType, setIsOpen, addItem, updateItem, deleteItem, toggleItem, openEdit, itemToEdit}}>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {modalType === 'add' && <AddForm />}
          {modalType === 'edit' && <EditForm />}
        </Modal>

        <ToastError error={error} setError={setError}/>

        

        <div className='flex flex-col h-dvh'>
            <Header />
            
            <Hero />
            
            <Footer />

        </div>
      </ItemContext.Provider>
    </>
  )
}

export default App

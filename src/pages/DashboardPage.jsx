import Header from '../components/appUI/Header.jsx'
import Hero from '../components/appUI/Hero.jsx'
import Footer from '../components/appUI/Footer.jsx'
import Modal from '../components/appUI/Modal.jsx'
import AddForm from '../components/appUI/AddForm.jsx'
import EditForm from '../components/appUI/EditForm.jsx'
import {useItems} from '../hooks/useItems'
import {ItemContext} from '../context/ItemContext.jsx'
import ToastError from '../components/appUI/Toast.jsx'

import {useAuthContext} from '../context/AuthContext.js'



export default function DashboardPage () {


  const { 
    error,
    setError,
    group,
    leaveOrDeleteGroup,
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
      <ItemContext.Provider value={{group, leaveOrDeleteGroup, items,isLoading, setModalType, setIsOpen, addItem, updateItem, deleteItem, toggleItem, openEdit, itemToEdit}}>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {modalType === 'add' && <AddForm setOpen={setIsOpen} />}
            {modalType === 'edit' && <EditForm setOpen={setIsOpen} />}
          </Modal>

          <ToastError error={error} setError={setError}/>

    
          <div className='flex flex-col bg-base-200'>
              <Header />
              
              <Hero />
          </div>
        </ItemContext.Provider>
    </>
  )
}
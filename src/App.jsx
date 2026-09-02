import {useState} from 'react'
import './App.css'
import Header from './components/UI/Header'
import Hero from './components/UI/Hero'
import Footer from './components/UI/Footer'
import Modal from './components/UI/Modal'

function App() {
  
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        
      </Modal>

      <div className='flex flex-col h-screen'>
          <Header />
          <Hero items={items} isOpen={isOpen} setIsOpen={setIsOpen} setModalType={setModalType}/>
          <Footer />
      </div>
    </>
  )
}

export default App

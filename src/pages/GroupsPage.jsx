import { useGroups } from '../hooks/useGroups.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import Modal from '../components/appUI/Modal.jsx'
import JoinForm from '../components/groupsUI/joinForm.jsx' 
import CreateForm from '../components/groupsUI/createForm.jsx'

import Header from '../components/appUI/Header.jsx'
import GroupsBox from '../components/groupsUI/groupsBox.jsx'
import GroupsList from '../components/groupsUI/groupsList.jsx'

export default function GroupsPage () {

  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const { groups, isLoading, error, createGroup, joinGroup } = useGroups()
  const navigate = useNavigate()

  const handleOpenCreate = () => {
    setModalType('create')
    setIsOpen(true)
  }
  const handleOpenJoin = () => {
    setModalType('join')
    setIsOpen(true)
  }

  const handleOpenCancel = () => {
    setIsOpen(false)
    setModalType(null)
  }

  const handleCreateGroup = async (name) => {
    const newGroup = await createGroup(name)
  
    if (newGroup) {
      setIsOpen(false)
    }

  }

  const handleJoinGroup = async (code) => {
    const newGroup = await joinGroup(code)

    if (newGroup) {
      setIsOpen(false)
      navigate(`/groups/${newGroup.id}`)
    }
  }

  return (
    <div className='flex flex-col min-h-screen '>

      <Modal isOpen={isOpen}>
        {modalType === 'create' && <CreateForm handleOpenCancel={handleOpenCancel} handleCreateGroup={handleCreateGroup} error={error}/>}
        {modalType === 'join' && <JoinForm handleOpenCancel={handleOpenCancel} handleJoinGroup={handleJoinGroup} error={error}/>}
      </Modal>

      <Header />
      <main className='flex-1 w-full max-w-2xl mx-auto mt-4 px-4 py-6 md:py-8 flex flex-col'>

        {
          isLoading ? 
            (
              <div className='w-full flex flex-row justify-center items-around'>
              <span className='loading loading-bars loading-xl'></span>
              </div>
            ) :
              groups.length < 1 ? 
                <GroupsBox handleOpenCreate={handleOpenCreate} handleOpenJoin={handleOpenJoin}/>:
                <GroupsList groups={groups} handleOpenCreate={handleOpenCreate} handleOpenJoin={handleOpenJoin} />}
      </main>
    </div>
  )
}

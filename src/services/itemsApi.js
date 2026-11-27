
const getUrl = (groupId) => {
  return `http://localhost:8000/api/groups/${groupId}/items`
}
const getAll = async ( token, groupId ) => {
 
  const response = await fetch(getUrl(groupId), {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  const data = await response.json()
  return data
}

const createItem = async (item, token, groupId) => {
  if (!item) throw new Error('item is missing')

  const response = await fetch(getUrl(groupId), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }, 
    body: JSON.stringify(item)
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.log(errorData)
    throw new Error(errorData.msg)
  }

  const data = await response.json()
  return data
}


const deleteItem = async (id, token, groupId) => {
  const response = await fetch( getUrl(groupId) + `/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  return
}

const toggleItem = async (item, token, groupId) => {
  const response = await fetch(getUrl(groupId) + `/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({isBought: !item.isBought})
  })

  if (!response.ok){
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  const data = await response.json()
  return data
}

const patchItem = async (item, token, groupId) => {
  const response = await fetch(getUrl(groupId) + `/${item.id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(item)
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  const data = await response.json()
  return data
}

export {getAll, createItem, deleteItem, toggleItem, patchItem}
const url = 'http://localhost:8000/api/items'
const getAll = async ( token ) => {
 
  const response = await fetch(url, {
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

const getItem = async (id) => {
    const response = await fetch(`${url}/${id}`)
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.msg)
    }
    const data = await response.json()
    return data
}

const createItem = async (item, token) => {
  if (!item) throw new Error('item is missing')

  const response = await fetch(url, {
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


const deleteItem = async (id, token) => {
  const response = await fetch(`${url}/${id}`, {
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

const toggleItem = async (item, token) => {
  const response = await fetch(`${url}/${item.id}`, {
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

const patchItem = async (item, token) => {
  const response = await fetch(`${url}/${item.id}`, {
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

export {getAll, getItem, createItem, deleteItem, toggleItem, patchItem}
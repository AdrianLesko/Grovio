const url = 'http://localhost:8000/items'

const getAll = async () => {
  const response = await fetch(url)
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

const createItem = async (item) => {
  if (!item) throw new Error('item is missing')

  const response = await fetch(url + 'fafafa', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
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


const deleteItem = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  return
}

const toggleItem = async (item) => {
  const response = await fetch(`${url}/${item.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({isBought: !item.isBought})
  })

  if (!response.ok){
    const errorData = await response.json()
    throw new Error(errorData.msg)
  }
  const data = await response.json()
  return data
}

const patchItem = async (item) => {
  const response = await fetch(`${url}/${item.id}`, {
    method: 'PATCH', 
    headers: {'Content-Type': 'application/json'},
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
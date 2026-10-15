const url = 'http://localhost:8000/items'
const slash = '/'

const getAll = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const error = new Error('Failed fetching from the server')
      error.status = 500
      return
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const getItem = async (id) => {
  try {
    const response = await fetch(url + slash + id)
    if (!response.ok) {
      throw new Error('Failed fetching from the server')
    }
    const data = await response.json()
    return data

  } catch (error) {
    throw new Error(error)
  }
}

const createItem = async (item) => {
  try {
    if (!item) {
      throw new Error('item is missing')
    }

    const response = await fetch(url + slash, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(item)
    })

    if (!response.ok) throw new Error('Failed fetching the data')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}


const deleteItem = async (id) => {
  try {
    const response = await fetch(url + slash + id, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('failed fetching the data')
    }
    return
  } catch (error) {
    throw new Error(error)
  }
}

const toggleItem = async (item) => {
  try {
    const response = await fetch(url + slash + id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({isBought: !item.isBought})
    })

    if (!response.ok){
      throw new Error('failed feching the data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const patchItem = async (item) => {
  try {
    const response = await fetch(url + slash + id, {
      method: 'PATCH', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    })

    if (!response.ok) {
      throw new Error('failed fetching the data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export {getAll, getItem, createItem, deleteItem, toggleItem, patchItem}
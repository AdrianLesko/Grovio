const backend_url = 'http://localhost:8000/api'

export const getGroup = async(token, groupId) => {
  const response = await fetch(backend_url + `/groups/${groupId}`, {
    method: 'GET',
    headers: {'Authorization': `Bearer ${token}`},
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.msg)
  }

  const group = await response.json()
  return group
}

export const getGroups = async (token) => {
  const response = await fetch(backend_url + '/groups/', {
    method: 'GET',
    headers: {'Authorization':`Bearer ${token}`}
  }
  )

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.msg)
  }

  const groups = await response.json()
  return groups // []
}

export const createGroup = async (token, name) => {
  const response = await fetch(backend_url + '/groups/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({name})
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.msg)
  }

  const group = await response.json()
  return group // {}
}

export const joinGroup = async (token, code) => {
  const response = await fetch(backend_url + '/groups/join', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json', 
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({code})
  })


  if (!response.ok){
    const data = await response.json()
    throw new Error(data.msg)
  }

  const group = await response.json()
  return group

}

export const deleteGroup = async (token, groupId) => {
  const response = await fetch(backend_url + `/groups/${groupId}`, {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${token}`}
  })

  if (!response.ok){
    const data = response.json()
    throw new Error(data.msg)
  }
  return
}
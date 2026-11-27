const url = 'http://localhost:8000/api/auth'

export const userRegister = async (username, email, password) => {
  const response = await fetch(url + '/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username, email, password
    })
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.msg)
  }

  const data = await response.json()
  return data //{token, newUser}
} 

export const userLogin = async (email, password) => {
  const response = await fetch(url + '/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({email, password})
  })

  if (!response.ok){
    const data = await response.json()
    throw new Error(data.msg)
  }
  
  const data = await response.json()
  return data //{token, newUser}
}
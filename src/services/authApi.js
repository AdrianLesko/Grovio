
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export const userRegister = async (username, email, password) => {
  const response = await fetch(API_URL + '/auth/register', {
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
  const response = await fetch(API_URL + '/auth/login', {
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
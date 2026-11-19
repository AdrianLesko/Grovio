import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function register (req,res,next) {
  try {
    const {name, surname, email, password } = req.body

    if (!name || !surname || !email || !password){
      const err = new Error('Are fields must be filled corectlly')
      err.status = 400
      throw err
    }

    if (password.length < 8) {
      const err = new Error('password must be at least 8 characters long')
      err.status = 400 
      throw err
    }

    const user = await User.findOne({email})

    if (user) {
      const err = new Error ('User with this email already exist, login to continue...')
      err.status = 409 
      throw err
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      surname,
      email, 
      passwordHash
    })

    await newUser.save()

    const tokenForUser = {
      name: newUser.name,
      email: newUser.email,
      id: newUser.id
    }

    const token = jwt.sign(tokenForUser, process.env.JWT_SECRET, {expiresIn: '2h'})
    res.status(201).json({token, user: newUser})
  } catch (err) {
    next(err)
  }
}


export async function login (req, res, next) {
  try {
    const {email, password} = req.body 

    if (!email || !password) {
      const err = new Error('You must provide email and password in correct format')
      err.status = 400
      throw err
    }

    const user = await User.findOne({email})

    if (!user) {
      const err = new Error('Password or Email is incorrect')
      err.status = 401
      throw err
    }

    const isPasswordCorrect = !password ? false : await bcrypt.compare(password, user.passwordHash)


    if (!(user && isPasswordCorrect)) {
      const err = new Error('Password or Email is incorrect')
      err.status = 401
      throw err
    }

    const tokenForUser = {
     name: user.name,
     email: user.email,
     id: user.id
    }

    const token = jwt.sign(tokenForUser, process.env.JWT_SECRET, {expiresIn: '2h'})

    res.status(200).json({token, user})
  } catch (err) {next(err)}
  
}
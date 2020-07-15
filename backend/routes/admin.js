const express = require('express')
const admin = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Admin = require('../models/Admin')
admin.use(cors())

process.env.SECRET_KEY = 'secret'

admin.post('/register', (req, res) => {
	const today = new Date()
	const adminData = {
		admin_id : req.body.admin_id,
		password : req.body.password
	}

	Admin.findOne()
		 .then(admin => {
			 if (!admin) {
				 const hash = bcrypt.hashSync(adminData.password, 10)
				 userData.password = hash
				 Admin.create(adminData)
				 .then(admin => {
					 let token = jwt.sign(admin.dataValues, process.env.SECRET_KEY, {
						 expiresIn: 1440
					 })
					 res.json({token: token})
				 })
				 .catch(err => {
					 res.send('error: ' + err)
				 })
			} else {
				res.json({error: 'Admin already exists'})
			}
		 })
		 .catch(err => {
			res.send('error: ' + err)
		})
})

module.exports = admin
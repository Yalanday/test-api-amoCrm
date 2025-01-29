const express = require('express');
const fs = require('node:fs');
const {getAuthDataFromFile} = require('./admin')

const tokenRouter = express.Router();

tokenRouter.get('/', async (req, res) => {
  console.log('get token');
  const data = getAuthDataFromFile()
  const accessToken = data.accessToken
  res.json({token: accessToken});
})

module.exports = {
  tokenRouter,
};

const express = require('express');

const {adminRouter} = require('./admin');
const {authRouter} = require('./auth');
const {tokenRouter} = require('./token');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/admin');
});

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/token', tokenRouter);

module.exports = router;

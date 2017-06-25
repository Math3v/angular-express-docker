const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const dbHost = 'mongodb://database/mean-docker';
mongoose.Promise = Promise;
mongoose.connect(dbHost);

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User();
user.name = 'Matej';
user.age = 25;
user.save((err) => {
  if(err) {
    console.error(`Cannot create user: ${err}`);
  }
});

router.get('/', (req, res) => {
  res.send('API Works!');
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.status(500).send(err);
    res.status(200).json(users);
  });
});

module.exports = router;

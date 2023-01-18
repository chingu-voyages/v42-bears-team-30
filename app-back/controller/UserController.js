const express = require('express');
const Client = require('../model/client');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
  //Check if the user already exists else create the user
  let client = await Client.findOne({ email: req.body.email });
  if (client) {
    return res.status(400).send('The user already exists');
  } else {
    try {
      client = new Client({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      client.save();
      res.send(client);
    } catch (e) {
      res.send(e);
    }
  }
};

module.exports = {
  signUp,
};

var express = require('express');
var router = express.Router();

const Users = require('../models/usersModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Users.find({},function(err,pers)
  {
      if(err)
      {
        res.send(err)
      }
      else
      {
        res.render("users",{data : pers,title: 'users'})
      }
  })
});
router.get('/user/:id', async function(req, res, next) {

  let id = req.params.id
  
  let user = await usersModel.getUser(id)
  res.render("user", {data : user,title: 'users'})
});

module.exports = router;

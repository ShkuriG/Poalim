var express = require('express');
var router = express.Router();

const Users = require('../models/carsModel')

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
        res.render("cars",{data : pers,title: 'cars'})
      }
  })
});
router.get('/cars/:id', async function(req, res, next) {

  let id = req.params.id
  
  let user = await usersModel.getUser(id)
  res.render("cars", {data : user,title: 'cars'})
});

module.exports = router;

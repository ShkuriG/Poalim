var express = require('express');
var router = express.Router();

const Apartments = require('../models/apartmentsModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Apartments.find({},function(err,pers)
  {
      if(err)
      {
        res.send(err)
      }
      else
      {
        res.render("apartments",{data : pers,title: 'apartments'})
      }
  })
});
router.get('/apartments/:id', async function(req, res, next) {

  let id = req.params.id
  
  let user = await usersModel.getUser(id)
  res.render("apartments", {data : Apartments,title: 'apartments'})
});

module.exports = router;

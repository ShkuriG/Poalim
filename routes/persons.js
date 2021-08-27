var express = require('express');
var router = express.Router();

const Person = require('../models/personModel')


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Person.find({},function(err,pers)
  {
      if(err)
      {
        res.send(err)
      }
      else
      {
        res.render("persons",{data : pers,title: 'persons'})
      }
  })
});


router.post('/update/:id', function(req, res, next) {
  
  let id = req.params.id
  let updatedPer = new Person({

   FirstName : req.body.FirstName,
   LastName : req.body.LastName,
   City : req.body.City
  }) 

  Person.findByIdAndUpdate(id, updatedPer, function(err)
  {
    if(err)
    {
      res.send(err)
    }
    else
    {
      res.send('Updated !')
    }
  })
})




router.get('/add', function(req, res, next) {
  
  let newPer = new Person({

   FirstName : req.query.FirstName,
   LastName : req.query.LastName,
   City : req.query.City
  }) 

  newPer.save(function(err)
  {
    if(err)
    {
      res.send(err)
    }
    else
    {
      res.send('Created !')
    }
  })


});



router.get('/:id', function(req, res, next) {
  
  let id = req.params.id;

  Person.findById(id,function(err,person)
  {
      if(err)
      {
        res.send(err)
      }
      else
      {
        res.send(person)
      }
  })
});


module.exports = router;

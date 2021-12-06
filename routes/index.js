var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var con = require('../conn/conn');

/* GET home page. Displaying login/register error message */
router.get('/', function(req, res, next) {
  if(req.session.flag == 1){
    req.session.destroy();
    res.render('index', { title: 'Not-A-Dollar', message : 'Email Already Exists' , flag : 1});
  }
  else if(req.session.flag == 2){
    req.session.destroy();
    res.render('index', { title: 'Not-A-Dollar', message : 'Registration Done. Please Login.', flag : 0});
  }
  else if(req.session.flag == 3){
    req.session.destroy();
    res.render('index', { title: 'Not-A-Dollar', message : 'Confirm Password Does Not Match.', flag : 1});
  }
  else if(req.session.flag == 4){
    req.session.destroy();
    res.render('index', { title: 'Not-A-Dollar', message : 'Incorrect Email or Password.', flag : 1 });
  }
  else{
    res.render('index', { title: 'Not-A-Dollar' });
  }
   
});

//Handle POST request for User Registration
router.post('/auth_reg', function(req, res, next){

  var fullname = req.body.fullname;
  var address = req.body.address;
  var email = req.body.email;
  var password = req.body.password;
  var cpassword = req.body.cpassword;

  if(cpassword == password){

    var sql = 'select * from user where email = ?;';

    con.query(sql,[email], function(err, result, fields){
      if(err) throw err;

      if(result.length > 0){
        req.session.flag = 1;
        res.redirect('/');
      }else{

        /* hash to crypt password */
        var hashpassword = bcrypt.hashSync(password, 10);

        /* Creating new user in database */
        var sql = 'insert into user(fullname,email,password,address) values(?,?,?,?);';
        con.query(sql,[fullname,email, hashpassword, address], function(err, result, fields){
          if(err) throw err;
          req.session.flag = 2;
          res.redirect('/');
        });
      }
    });
  }else{
    req.session.flag = 3;
    res.redirect('/');
  }
});


//Handle POST request for User Login
router.post('/auth_login', function(req,res,next){

  var email = req.body.email;
  var password =req.body.password;

  var sql = 'select * from user where email = ?;';
  
  con.query(sql,[email], function(err,result, fields){
    if(err) throw err;

    /* comparing the enter hash password with the database hash password */
    if(result.length && bcrypt.compareSync(password, result[0].password)){
      req.session.fullname = result[0].fullname;
      req.session.email = email;
      res.redirect('/home');
    }else{
      req.session.flag = 4;
      res.redirect('/');
    }
  });
});


//Route For Home Page
router.get('/home', function(req, res, next){

  var sql = 'select * from checkout where email = ?;';
  var email = req.session.email;

  


  res.render('home', {message : 'Welcome, ' + req.session.fullname});
});



router.get('/logout', function(req, res, next){
  if(req.session.email){
    req.session.destroy();
    res.redirect('/');
  }
})

//getting to the product page
router.get('/product', function(req, res, next){
  res.redirect('http://localhost:3000/');
})

module.exports = router;

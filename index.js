const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const contacts = require('../modules/contacts');
const url = require('url');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SimpleService' });
});

// can process any existing query paramters (e.g.:?firstname=John)
router.get('/contacts', (request, response, next) => {

  let get_params = url.parse(request.url, true).query;
  console.log('got into contacts');

  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(contacts.list()));
  } else {
    let key = Object.keys(get_params)[0]; // get first parameter only
    console.log("First key is: " + key);
    let value = request.query[key];
    console.log('params ' + value);
    let result = contacts.query_by_arg(key, value);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  }
});

// example for using path variable
router.get('/contact/:lastname', (request, response, next) => {
  const param = request.params.lastname;
  console.log('got into contact/:lastname ' + param);

  const result = contacts.query_by_arg(
    "lastname", param);
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

module.exports = router;

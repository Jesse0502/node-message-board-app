var express = require('express');
var router = express.Router();
// router.use(express.urlencoded({ extended: true }));
const distanceInWords = require('date-fns/formatDistanceToNow');
const messages = [
  {
    title: 'Demo',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, consectetur nihil. Doloribus sit voluptate quidem mollitia quas eos quibusdam quos.',
    date: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', messages, format: distanceInWords });
});

router.post('/', function (req, res, next) {
  let date = new Date();
  messages.push({
    title: req.body.title,
    body: req.body.body,
    date: new Date(),
  });
  res.redirect('/');
});

router.get('/create', function (req, res, next) {
  res.render('create', { title: 'Create' });
});

module.exports = router;

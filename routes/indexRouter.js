const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

indexRouter.post('/new', (req, res) => {
  const { username, message } = req.body;
  messages.push({
    user: username,
    text: message,
    added: new Date(),
  });
  res.redirect('/');
});

indexRouter.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('message', {
    title: 'Message Details',
    message,
  });
});

module.exports = indexRouter;

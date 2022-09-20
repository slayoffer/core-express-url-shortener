require('@babel/register');

const express = require('express');
const logger = require('morgan');
const renderTemplate = require('./lib/RenderTemplate');
const Main = require('./views/Main');
const URLshortener = require('./lib/modules/URL');

const { Link } = require('./db/models');

const app = express();
const PORT = 3000;

// Тут должна быть проверка подключения к БД.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const myURLS = await Link.findAll(({ raw: true }));
  renderTemplate(Main, {
    title: 'URL shortener',
    urls: myURLS,
    query: req.query,
  }, res);
});

app.post('/urls', async (req, res) => {
  try {
    const { longURL, shortURL } = URLshortener(req.body.longURL);
    await Link.create({
      short_link: shortURL,
      long_link: longURL,
      clicks: 0,
    });
    res.redirect('/');
  } catch (error) {
    res.redirect('/?error=true');
  }
});

app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Link.findOne({
    where:
    { short_link: shortUrl },
  });
  await url.increment(['clicks'], { by: 1 });
  res.redirect(url.long_link);
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

const express = require('express'); //expressi projeye dahil ettik
const usersData = require('./usersData');
const { v4: uuidv4 } = require('uuid');

const app = express(); //expressin constructurından app oluşturduk
const PORT = 3000; //web serverın hangi portta çalışacağını belirledik
app.use(express.json()); //gönderilen veri body içinde yer alır

app.get('/users', (req, res) => {
  res.json(usersData);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = usersData.find((user) => user.id == id);

  res.json({
    user,
  });
});


app.post('/users', (req, res) => {
  const { name, place } = req.body;

  usersData.push({
    id: uuidv4(),
    name,
    place,
  });

  res.json(usersData);
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { name, place } = req.body;

  const user = usersData.find((user) => user.id == id);

  user.name = name;
  user.place = place;

  res.json(usersData);
});

app.listen(PORT, () => {
  //uygulamanın çalışması çin
  console.log('server started PORT: ' + PORT);
});

// gönderilen id yi requestten almak
// dizinin elemanını bulmak
// bulduğun elamanı response la dön

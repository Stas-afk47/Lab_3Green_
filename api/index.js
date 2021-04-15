const express = require('express')
const app = express()
const port = 3000

const courses = require('./routes/courses.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/courses/', courses.getAll );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

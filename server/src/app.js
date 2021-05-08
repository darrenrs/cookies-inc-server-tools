console.log('Server booted ...');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.post('/register', (request, response) => {
  console.log(request);
  response.send({
    message: `${request.body.username}, a confirmation email has been sent to ${request.body.email}. Thanks for registering!`
  });
});

app.listen(process.env.PORT || 8081);
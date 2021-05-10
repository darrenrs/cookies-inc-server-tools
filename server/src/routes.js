module.exports = (app) => {  
  app.post('/register', (request, response) => {
    console.log(request);
    response.send({
      message: `${request.body.username}, a confirmation email has been sent to ${request.body.email}. Thanks for registering!`
    });
  });
}
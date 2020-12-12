const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    livro: 'Além do bem e do mal',
  });
});

app.listen(3333);

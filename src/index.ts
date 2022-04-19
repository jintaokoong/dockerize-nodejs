import { get } from 'configurations/env';
import express from 'express';
import helloService from 'services/hello-service';

const app = express();

app.get('/', (req, res) => {
  return res.send({ message: helloService.getHello() + ' ' + get('SECRET') });
});

app.listen(4689, () => {
  console.log(`listening on port ${4689}`);
});

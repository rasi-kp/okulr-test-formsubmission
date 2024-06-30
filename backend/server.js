const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routers/form');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', formRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

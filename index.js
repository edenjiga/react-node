require('dotenv').config();
require('./services/passport');
const express = require('express');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`in port ${PORT}`);
});
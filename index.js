require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

mongoose.connect(process.env.MONGODB);
const app = express();

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`in port ${PORT}`);
});

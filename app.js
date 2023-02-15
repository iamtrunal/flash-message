// Require the NPM packages that we need
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// Initalise a new express application
const app = express();

// Set a default environment port or cutom port - 5000
const port = process.env.PORT || 5000;

// This allows us to pass data from the form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Cookie Parser, sessions and flash
app.use(cookieParser('NotSoSecret'));
app.use(session({
  secret: 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// Setting our view engine as EJS
app.set('view engine', 'ejs');

const appRouter = require('./routes/app.routes');
app.use("/app", appRouter);


/** GET /  Home Page */
app.get('/', function (req, res) {
  // Set a flash name and pass it to the home page.
  // If empty, we won't display. That's handled by EJS.  
  const userName = req.flash('user');
  res.render('pages/index', { userName })
});

/** Post /  Home Page */
app.post('/', function (req, res) {
  // On form submit set the flash user object to the userName input from the form
  req.flash('user', req.body.userName);
  res.redirect('/');
});

// Start out application
app.listen(port);
console.log(`Server is listening on port ${port}`);
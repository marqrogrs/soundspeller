var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var lessonsRouter = require('./routes/lesson')
var wordsRouter = require('./routes/word')
var phonemesRouter = require('./routes/phoneme')
var apiRouter = require('./routes/api')

var app = express()

//Set up mongoose connection
var mongoose = require('mongoose')
var dev_db_url =
	'mongodb+srv://soundspeller:SoundSpeller@cluster0-mbali.azure.mongodb.net/Soundspeller?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

app.use('/', indexRouter)
app.use('/lessons', lessonsRouter)
app.use('/words', wordsRouter)
app.use('/phonemes', phonemesRouter)
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app

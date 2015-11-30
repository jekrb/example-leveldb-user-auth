const http = require('http')
const fs = require('fs')

const pass = require('pwd')
const body = require('body/any')
const tr = require('trumpet')
const hyperstream = require('hyperstream')
const gzip = require('oppressor')

const st = require('st')
const serve = st({
  path: 'public'
})

const level = require('level')
const db = level('db', {
  keyEncoding: require('bytewise'),
  valueEncoding: 'json'
})

const render = require('./lib/render')
const userAction = require('./lib/userAction')(body, db, pass)

const renderSignUp = render(fs, hyperstream, 'signup')
const userSignUp = require('./routes/users/signup')

const renderLogin = render(fs, hyperstream, 'login')
const userLogin = require('./routes/users/login')

const routes = require('patterns')()

routes.add('GET /', (greq, res) => fs.createReadStream('./static/index.html')
    .pipe(greq)
    .pipe(res))

routes.add('GET /signup', renderSignUp)
routes.add('POST /signup', userAction(userSignUp))

routes.add('GET /login', renderLogin)
routes.add('POST /login', userAction(userLogin))

http.createServer((req, res) => {
  const m = routes.match(req.method + ' ' + req.url)
  if (!m) {
    serve(req, res)
    return
  }
  m.value(gzip(req), res)
}).listen(9090, () => {
  console.log('server is listening on http://0.0.0.0:9090')
})

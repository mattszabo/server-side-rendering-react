require('babel-core/register')

var express = require('express')
  , app = express()
  , React = require('react')
  , ReactDOM = require('react-dom/server')
  , components = require('./public/components.js')

var HelloMessage = React.createFactory(components.HelloMessage)

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.render('index', {
    react: ReactDOM.renderToString(HelloMessage({name: "Matt"}))
  })
})

app.listen(3001, function() {
  console.log('Spying on 3001...')
})

const express = require('express')
const app = express()
const PORT  = 3001
const userCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', userCtrl.read)
app.post('/api/messages', userCtrl.create)
app.put('/api/messages/:id', userCtrl.update)
app.delete('/api/messages/:id', userCtrl.delete)

app.listen(PORT, () => console.log(`Honky is up and running on port ${PORT}`))

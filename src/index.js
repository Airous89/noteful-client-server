const jsonServer = require('json-server')
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
  console.log('Server listening at http://localhost:${PORT')
})

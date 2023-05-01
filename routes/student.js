const studentController = require('../controllers/student')

async function routes(fastify, options) {
  fastify.get('/students', studentController.getAll)
  fastify.get('/students/:id', studentController.getById)
  fastify.post('/students', studentController.create)
  fastify.put('/students/:id', studentController.update)
  fastify.delete('/students/:id', studentController.delete)
}

module.exports = routes

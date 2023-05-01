// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const studentRoutes = require('./routes/student')

// fastify.register(require('fastify-mysql'), {
//   connectionString: 'mysql://root:@127.0.0.1/student'
// })

fastify.register(studentRoutes, { prefix: '/api/v1' })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()



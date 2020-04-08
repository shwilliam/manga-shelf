const {seed} = require('./seed')
;(async () => {
  await seed()
  require('./app')
})()

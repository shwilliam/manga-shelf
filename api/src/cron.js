const cron = require('node-cron')
const {seed} = require('./seed')

// every 2 hours
cron.schedule('0 */2 * * *', () => {
  seed()
})

'use strict'

// Regression fixture for issue #2326.
// Creates an async (sync: false) SonicBoom-backed file destination and
// exits the process immediately, before the underlying fs.open completes.
// This must not throw "sonic boom is not ready yet".
const pino = require('../..')
const dest = pino.destination({ dest: process.argv[2], sync: false })
const logger = pino(dest)
logger.info('hello')
process.exit(0)

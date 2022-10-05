const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an first informational message')
logger.log('This is an second informational message')
logger.log('This is an third informational message')
logger.log('This is an fourth informational message')


//También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
logger.log('This is an fourth informational message')

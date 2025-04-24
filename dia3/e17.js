const logger = require('node-color-log')
logger.color('red').bgColor('blue')
      .bold().italic().dim().reverse().underscore().strikethrough()
      .log("hola");
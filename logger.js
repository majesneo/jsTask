'use strict';
//
// const logger = level => {
//     const color = logger.colors[level] || logger.colors.info;
//     return s => {
//         const date = new Date().toISOString()
//         console.log(color + date + '\t' + s)
//     }
// }
//
// logger.colors = {
//     warning: '\x1b[1;33m',
//     error: '\x1b[0;31m',
//     info: '\x1b[1;37m'
// }
//
// const warning = logger('warning')
// const error = logger('error')
// const debug = logger('debug')
// const slow = logger('slow')
//
// slow('I am slow logger')
// warning('Hello')
// error('World')
// debug('Bye!')

// function Logger(level) {
//     this.color = Logger.colors[level] || Logger.colors.info;
// }
//
// Logger.colors = {
//     warning: '\x1b[1;33m',
//     error: '\x1b[0;31m',
//     info: '\x1b[1;37m'
// }
//
// Logger.prototype.log = function (s) {
//     const date = new Date().toISOString()
//     console.log(this.color + date + '\t' + s)
// }
//
// const warning = new Logger('warning')
// const error = new Logger('error')
// const debug = new Logger('debug')
// const slow = new Logger('slow')
//
// slow.log('I am slow logger')
// warning.log('Hello')
// error.log('World')
// debug.log('Bye!')


class Logger {
    constructor(level) {
        this.color = Logger.colors[level] || Logger.colors.info
    }

    log(s) {
        const date = new Date().toISOString();
        console.log(this.color + date + '\t' + s)
    }
}

Logger.colors = {
    warning: '\x1b[1;33m',
    error: '\x1b[0;31m',
    info: '\x1b[1;37m'
}

const warning = new Logger('warning')
const error = new Logger('error')
const debug = new Logger('debug')
const slow = new Logger('slow')

slow.log('I am slow logger')
warning.log('Hello')
error.log('World')
debug.log('Bye!')
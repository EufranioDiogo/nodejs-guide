// More usable approach for take a read stream and write stream
const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog5.txt')

readStream.pipe(writeStream)

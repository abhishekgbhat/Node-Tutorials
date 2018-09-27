process.env.UV_THREADPOOL_SIZE = 1
const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doRequest () {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {})
      res.on('end', () => {
        console.log(Date.now() - start)
      })
    })
    .end()
}

function doHash () {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash : ', Date.now() - start)
  })
}

doRequest()

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()

// Why is the first hash displayed before fs?
// And why is fs taking too long.

// Show Daigram 1
// Show Daigram 2
// Show Daigram 3 shows how node reads the file.
// Show Daigram 4
// Show Daigram 5 Last and final one.

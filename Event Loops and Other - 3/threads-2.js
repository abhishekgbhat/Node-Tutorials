// process.env.UV_THREADPOOL_SIZE = 5
// Benchmarking the function
const crypto = require('crypto')

const start = Date.now()

// Both functions executed at the same time.
// Note : Start time is not modified at all.

// Abhishek Notes : Run 1, 1.2, 1.2.3.4.5
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1 : ', Date.now() - start)
})

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//   console.log('2 : ', Date.now() - start)
// })

// // Observe that both the time are quite close to original value.
// // Image - NodeMultithreadDaigram.png

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//   console.log('3 : ', Date.now() - start)
// })

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//   console.log('4 : ', Date.now() - start)
// })

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//   console.log('5 : ', Date.now() - start)
// })

// Show Working of Working of 4 threads.PNG

// Next show Working on a Mac- 2Calls.PNG

// Next show Working on a Mac- 5Calls.PNG

//  Next show Working on a Mac- ThreadAssignment call 1 2 3 4.PNG

//  Next show Working on a Mac- ThreadAssignment call 5.PNG

// UNCOMMENT LINE 1 and run

// Assign threadpoolsize = 5 and run

// Next show Working on a Mac- ThreadSize2 - 1.PNG

// go back to loop-1.js and see that pendingOperations are the thread pool operations.

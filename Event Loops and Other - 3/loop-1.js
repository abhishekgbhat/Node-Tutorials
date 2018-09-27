//simulating node event loop
// node myFile.js 

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New Timers, tasks, operations are recorded from myFile running.
myFile.runContents();

function shouldContinue() {
  // First check : Any pennding setTimeout, setInterval, setImmediate
  // Second check : Any pending OS tasks. (Like server listening to ports)
  // Third Check : Any pending long running operation?(Like fs module)
  return pendingOperations || pendingOSTasks || pendingTimers;
}
//Entire body executes in one 'tick'
while (shouldContinue()) {
  // First step : Look at pending timers and see if any functions are ready to be called. (setTimeout, setInterval)

  // Second step : Look at pending OS tasks and pendingOperations and calls relevant callbacks

  // Third Step  
  // Pause execution. Continues when
  // - a new pendingOSTasks is done
  // - a new pendingOperation is done
  // - a timer is about to complete.

  // Fourth Step
  // Looking at pendingTimers. Call any setImmediate

  // Last Step
  // Handle any 'close' events
}






// exit back to terminal
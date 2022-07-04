// node myfile.js

const pendingTimers = [];
const pendingTasks = [];
const pendingOperations = [];

// New timers ,tasks,operations are recorded from myFile running
myfile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout,setInterval,setImmediate?
  // Check two: Any pending os tasks? (Like server listing to port)
  // Check three: Any pending long running operation? (like fs module)

  return (
    pendingTimers.length || pendingTasks.length || pendingOperations.length
  );
}
// Entire body executes in one 'TICK'
while (shouldContinue()) {
  /*
        1) Node looks at pendingTimers and sees if any functions
            are ready to be called. setTimeout,setInterval.

        2) Node looks at pendingOSTasks and PendingOperations
            and calls relevent callbacks.

        3) Pause execution. continue when....
            -- a new pendingOsTask is done
            -- a new pendingOperation is done
            -- a timer is about to complete.

        4) look at pendingTimers.
        
        5) Handle any 'close' events

    */
}

// exit back to terminal

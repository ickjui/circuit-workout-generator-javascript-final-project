/*----- Constants -----*/

const exercises = {
  arms: ['50x arm circles', '10x push ups', '30x knee push ups','7x inch worms', '10x shoulder taps','15x commandos - each side', '10x tricep dips'],
  legs: ['20x jump lunges','20x lunges (10 each side)','20x bodyweight squats', '12x burpees', '10x leg lifts', '40x high knees', '20x glute bridges', '20x curtsy lunges'],
  core: ['10x jump plank', '20x mountain climbers', 'Side plank: 30 seconds each side','Full 60 second plank', '10x leg lifts', '12x burpees', '5x ab roll-outs', 'Pilates 100'],
  fullBody: ['10x reverse crunches','20x sitting twists', '60 second plank', '10x commandos', '50x flutter kicks', '10x shoulder tap planks', '10x twisted side planks', '12x burpees', '12x push-up + rotation']
}

/*----- App State -----*/

document.addEventListener('DOMContentLoaded', () => {

  // Shuffles the workouts from the exercises object
  const randomizer = (bodyPart) => {
    return bodyPart[Math.floor(Math.random()*bodyPart.length)];
  }
  
  // Shorthand to create the 'p' elements
  const newP = document.createElement('p');  

  // Loops through the buttons to add in event listeners to each of them
  const buttons = document.querySelectorAll('#workoutButtons .buttonClass')
    for (const button of buttons) {
      document.querySelectorAll('.buttonClass');
      button.addEventListener('click', function() {
  // Grabs the target dataset from click
        const bodyPartDataType = event.target.dataset.part;
          console.log(bodyPartDataType)
  // Appends four workouts to the workout div
        const workouts = document.querySelectorAll('.workout');
          for (const workout of workouts){
            workout.innerText = randomizer(exercises[bodyPartDataType]),
            workout.append(newP)
    };
   })
  }
});
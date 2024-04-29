// const fire = document.getElementById('fire')
// const body = document.getElementById('body')

// setInterval(() => {
//     console.log(((fire.getBoundingClientRect().left * 100)/ body.clientWidth) + '%')
// },1000)

const fire = document.getElementById('fire');
const body = document.getElementById('body');


document.addEventListener('DOMContentLoaded', () => {

    // Function to log and check the position of the fire element
    setInterval(() => {
        // Get the current left position of the fire element
        let fireLeft = fire.getBoundingClientRect().left;

        // Calculate the position percentage relative to the body width
        let positionPercentage = (fireLeft * 100) / body.clientWidth;

        // Log the position percentage
        console.log(positionPercentage + '%');

        // Check if the fire element is within the specified range (815 to 881 pixels)
    }, 1000); // Interval (in milliseconds) for position checking
});

const stopbtn = document.getElementById('actionButton')

stopbtn.addEventListener('click',() => {
    fire.style.animation = 'none'
    console.log('clicked')
}) 

// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// screen x 638 - 681
// 815 - 881


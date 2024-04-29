// const fire = document.getElementById('fire')
// const body = document.getElementById('body')

// setInterval(() => {
//     console.log(((fire.getBoundingClientRect().left * 100)/ body.clientWidth) + '%')
// },1000)


// document.addEventListener('DOMContentLoaded', () => {
//     const fire = document.getElementById('fire');
//     const body = document.getElementById('body');

//     // Function to log and check the position of the fire element
//     setInterval(() => {
//         // Get the current left position of the fire element
//         const fireLeft = fire.getBoundingClientRect().left;

//         // Calculate the position percentage relative to the body width
//         const positionPercentage = (fireLeft * 100) / body.clientWidth;

//         // Log the position percentage
//         console.log(positionPercentage + '%');

//         // Check if the fire element is within the specified range (815 to 881 pixels)
//         if (fireLeft >= 11 && fireLeft <= 12) {
//             // Perform actions when the fire element is within the range
//             console.log('Fire caught in the specified range!');
//             // Add your logic here (e.g., redirect to the next page)
//             window.location.href = 'chapter2/chapter2-7.html';
//         }
//     }, 1000); // Interval (in milliseconds) for position checking
// });

// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// screen x 638 - 681
// 815 - 881

document.addEventListener('DOMContentLoaded', () => {
    const fire = document.getElementById('fire');
    const body = document.getElementById('body');
    const stopbtn = document.getElementById('actionButton');

    // Variable to track if the fire has reached the specified range
    let fireReachedRange = false;

    // Function to check if the fire has reached the specified range and handle redirection
    function checkFireRange() {
        // Get the current left position of the fire element
        const fireLeft = fire.getBoundingClientRect().left;

        // Log the current left position of the fire element
        console.log('Fire left position:', fireLeft);

        // Check if the fire element's left position is within the specified range (815 to 881 pixels)
        if (fireLeft >= 815 && fireLeft <= 881) {
            // Check if the fire has not already reached the range to avoid multiple redirects
            if (!fireReachedRange) {
                // Set flag to true to indicate that the fire has reached the range
                fireReachedRange = true;

                // Perform actions when the fire element is within the range for the first time
                console.log('Fire caught in the specified range!');
                // Redirect to the next page
                window.location.href = 'next_page_url_here';
            }
        } else {
            // Reset the flag if the fire moves out of the specified range
            fireReachedRange = false;
        }
    }

    // Interval (in milliseconds) for position checking
    const intervalId = setInterval(checkFireRange, 1000);

    // Event listener for the stop button to clear the interval
    stopbtn.addEventListener('click', () => {
        // Stop the animation of the fire element
        fire.style.animation = 'none'; // or fire.style.animation = '';
        console.log('Animation stopped');

        // Clear the interval to stop position checking
        clearInterval(intervalId);
        console.log('Position checking stopped');
    });
});




// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);
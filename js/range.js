// const fire = document.getElementById('fire')
// const body = document.getElementById('body')

// setInterval(() => {
//     console.log(((fire.getBoundingClientRect().left * 100)/ body.clientWidth) + '%')
// },1000)


document.addEventListener('DOMContentLoaded', () => {
    const fire = document.getElementById('fire');
    const body = document.getElementById('body');

    // Function to log and check the position of the fire element
    setInterval(() => {
        // Get the current left position of the fire element
        const fireLeft = fire.getBoundingClientRect().left;

        // Calculate the position percentage relative to the body width
        const positionPercentage = (fireLeft * 100) / body.clientWidth;

        // Log the position percentage
        console.log(positionPercentage + '%');

        // Check if the fire element is within the specified range (815 to 881 pixels)
        if (fireLeft >= 44 && fireLeft <= 47) {
            // Perform actions when the fire element is within the range
            console.log('Fire caught in the specified range!');
            // Add your logic here (e.g., redirect to the next page)
            window.location.href = 'next_page_url_here';
        }
    }, 1000); // Interval (in milliseconds) for position checking
});

// let screenLog = document.querySelector("#screen-log");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// screen x 638 - 681
// 815 - 881


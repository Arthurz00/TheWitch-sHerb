document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const maxClicks = 5; // Number of clicks after which to redirect

    // Function to handle button click
    function handleButtonClick() {
        clickCount++; // Increment click count

        // Check if click count reaches the threshold
        if (clickCount === maxClicks) {
            // After 5 clicks, redirect to the next page
            setTimeout(() => {
                window.location.href = 'chapter2-3-2.html'; // Redirect to next page
            }, 2000); // Delay in milliseconds (2 seconds)
        }
    }

    // Add event listener to the button
    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', handleButtonClick);
});

////////////////
    // document.addEventListener('DOMContentLoaded', () => {
    //     const cancelButton = document.getElementById('clickButton');
    //     const knifeImage = document.querySelector('.bouncing-knife');

    //     // Function to handle button click and cancel animation
    //     function cancelBouncingAnimation() {
    //         knifeImage.style.animation = 'none'; // Remove the bouncing animation
    //     }

    //     // Event listener for the cancel button
    //     cancelButton.addEventListener('click', cancelBouncingAnimation);
    // });

    document.addEventListener('DOMContentLoaded', () => {
        const moveButton = document.getElementById('clickButton');
        const elementContainer = document.getElementById('imageContainer');
        let isMovingDown = false; // Flag to track movement direction
        let isRotatedLeft = false; // Flag to track rotation direction

        // Function to handle button click and move/rotate element
        function moveAndRotateElement() {
            // Toggle movement direction (vertical)
            if (isMovingDown) {
                elementContainer.style.bottom = '15%'; // Move element back up
                elementContainer.querySelector('img').style.transform = 'rotate(0deg)';
            } else {
                elementContainer.style.bottom = '1%'; // Move element down
                elementContainer.querySelector('img').style.transform = 'rotate(-25deg)'
            }
            

            // Toggle the movement and rotation flags
            isMovingDown = !isMovingDown;
            isRotatedLeft = !isRotatedLeft;
        }

        // Event listener for the move button
        moveButton.addEventListener('click', moveAndRotateElement);
    });


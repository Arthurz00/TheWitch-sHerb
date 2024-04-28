// let clickCount = 0;
//     const imageSources = [
//         "img/Cutting/all.png"
//     ];
//     const displayedImage = document.getElementById('displayedImage');

// function handleButtonClick() {
//     clickCount++;

//     // Change image source after 5 clicks
//     if (clickCount === 5) {
//         // Change image source to the next image in the array
//         displayedImage.src = imageSources[clickCount % imageSources.length];

//         // Wait for 3 seconds before navigating to the next page
//         setTimeout(() => {
//             // Navigate to the next page
//             window.location.href = 'chapter2-4.html';
//         }, 2500);
//     }
// }

let clickCount = 0;
const imageSources = [

];
const displayedImage = document.getElementById('displayedImage');

function handleButtonClick() {
    clickCount++;

    // Debugging: Output clickCount and current image source to console
    console.log(`Click Count: ${clickCount}`);
    console.log(`Current Image Source: ${displayedImage.src}`);

    // Change image after 5 clicks
    if (clickCount === 5) {
        // Change image source to the last image in the array
        displayedImage.src = imageSources[imageSources.length - 1];

        // Wait for 3 seconds before navigating to the next page
        setTimeout(() => {
            // Navigate to the next page (replace '/next-page.html' with the desired URL)
            window.location.href = 'chapter2-3-2.html';
        }, 3000);
    } else if (clickCount < imageSources.length) {
        // Change image source to the next image in the array
        displayedImage.src = imageSources[clickCount];

        // Debugging: Output new image source to console
        console.log(`New Image Source: ${displayedImage.src}`);
    }
}
 // Function to handle automatic selection and redirect
 function handleCardSelection() {
    setTimeout(() => {
        // Simulate card selection or action after 5 seconds
        console.log('Card selected after 5 seconds');
        window.location.href = 'chapter2-8.html'; // Redirect to the next page
    }, 6500); // Delay in milliseconds (5 seconds)
}

// Get the card box element by its ID
const cardBox = document.getElementById('cardBox');

// Attach mouseover event listener to the card box
cardBox.addEventListener('mouseover', () => {
    // Trigger the selection process when the mouse hovers over the card box
    handleCardSelection();
});
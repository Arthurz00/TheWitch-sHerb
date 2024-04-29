// Function to redirect to the next page
function redirectToNextPage() {
    window.location.href = "chapter2-8-2.html"; // Replace with your desired next page URL
  }
  
  // Set timeout to redirect after 5 seconds
  setTimeout(redirectToNextPage, 10000); // 5000 milliseconds = 5 seconds
  
  // Function to cancel the redirect if button is clicked
  function cancelRedirect() {
    clearTimeout(redirectToNextPage); // Clear the timeout
  }

/////////////////////

  document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    
    let countdownValue = 8;
    countdownElement.textContent = countdownValue;
    
    const countdownInterval = setInterval(() => {
      countdownValue--;
      if (countdownValue >= 0) {
        countdownElement.textContent = countdownValue;
      } else {
        clearInterval(countdownInterval);
        countdownElement.textContent = '';
        // Add logic here to redirect or perform any action after countdown
      }
    }, 1000);
  });
  
  // Get references to the modal and modal image
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Variable to keep track of the current state of the image
var isOldImage = true;

// Get the image element
var img = document.getElementById("myImg");

// Add click event listener to the image
img.onclick = function() {
  // Toggle between old and new image sources
  if (isOldImage) {
    this.src = "img/scene_bookshelf/search.png"; // Set to new image source
  } else {
    this.src = "img/scene_bookshelf/book_glow1.png"; // Set to old image source
  }
  
  // Toggle the state of the image
  isOldImage = !isOldImage;
  
  // Display the modal
  modal.style.display = "block";
};

// Get the <span> element that closes the first modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the first modal
span.onclick = function() { 
  modal.style.display = "none";
};

img.onclick = function(){
  modal.style.display = "block";
}

///////////////////////////////////////////////////////////////////////////
////////// Get the second modal
// Get references to the modal and modal image
var modal2 = document.getElementById("myModal2");
var modalImg2 = document.getElementById("img02");

// Variable to keep track of the current state of the image
var isOldImage2 = true;

// Get the image element
var img2 = document.getElementById("myImg2");

// Add click event listener to the image
img2.onclick = function() {
  // Toggle between old and new image sources
  if (isOldImage2) {
    this.src = "img/scene_bookshelf/search.png"; // Set to new image source
  } else {
    this.src = "img/scene_bookshelf/book_glow2.png"; // Set to old image source
  }
  
  // Toggle the state of the image
  isOldImage2 = !isOldImage2;
  
  // Display the modal
  modal2.style.display = "block";
};

// Get the <span> element that closes the second modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the second modal
span2.onclick = function() { 
  modal2.style.display = "none";
};

img2.onclick = function(){
  modal2.style.display = "block";
}


////////////////////////////////////////////////////////////////////////////////////
// Get the third modal
var modal3 = document.getElementById("myModal3");
var modalImg3 = document.getElementById("img03");

// Variable to keep track of the current state of the image for the third modal
var isOldImage3 = true;

// Get the third image element
var img3 = document.getElementById("myImg3");

// // Store the original source of the image
// var originalSrc3 = img3.src;

// Add click event listener to the third image
img3.onclick = function() {
  // Check if the image is in its old state
  if (isOldImage3) {
    this.src = "img/scene_bookshelf/book3.png"; // Set to new image source
  } else {
    this.src = "img/scene_bookshelf/book_glow3.png"; // Set to old image source
  }
  
  // Toggle the state of the image for the third modal
  isOldImage3 = !isOldImage3;
  
  // Display the third modal
  modal3.style.display = "block";
};

// Get the <span> element that closes the third modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the third modal
span3.onclick = function() { 
  modal3.style.display = "none";
};
img3.onclick = function(){
  modal3.style.display = "block";
}





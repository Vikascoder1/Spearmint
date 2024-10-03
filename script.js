

// const gif = document.getElementById('walkingGif');

// document.body.addEventListener('click', function (event) {
//   // Get the size of the GIF
//   const gifWidth = gif.offsetWidth;
//   const gifHeight = gif.offsetHeight;

//   // Get the dimensions of the viewport
//   const screenWidth = window.innerWidth;
//   const screenHeight = window.innerHeight;

//   // Get the click position
//   let targetX = event.clientX - gifWidth / 2; // Center the gif horizontally
//   let targetY = event.clientY - gifHeight / 2; // Center the gif vertically

//   // Calculate current GIF position
//   const gifRect = gif.getBoundingClientRect();
//   const gifX = gifRect.left;

//   // Check if the click is to the left or right of the current GIF position
//   let scaleXDirection = 1; // Default face right
//   if (targetX < gifX) {
//     scaleXDirection = -1; // Face left (flipping horizontally)
//   }

//   // Ensure the GIF stays within screen boundaries
//   if (targetX < 0) targetX = 0; // Left boundary
//   if (targetY < 0) targetY = 0; // Top boundary
//   if (targetX + gifWidth > screenWidth) targetX = screenWidth - gifWidth; // Right boundary
//   if (targetY + gifHeight > screenHeight) targetY = screenHeight - gifHeight; // Bottom boundary

//   // Move the GIF smoothly and apply flipping (scaleX)
//   gif.style.transition = `transform 4.0s linear`;
//   gif.style.transform = `translate(${targetX}px, ${targetY}px) scaleX(${scaleXDirection})`;
// });

// // Select the GIF element by its ID
// const gif = document.getElementById('walkingGif');

// // Add an event listener to the body that triggers on a 'click' event
// document.body.addEventListener('click', function (event) {
  
//   // Get the width and height of the GIF
//   const gifWidth = gif.offsetWidth;  // Gets the width of the GIF in pixels
//   const gifHeight = gif.offsetHeight;  // Gets the height of the GIF in pixels

//   // Get the width and height of the browser window (viewport)
//   const screenWidth = window.innerWidth;  // Gets the width of the visible browser window in pixels
//   const screenHeight = window.innerHeight;  // Gets the height of the visible browser window in pixels

//   // Calculate the target X and Y position based on the user's click
//   // Subtracting half of the GIF's width/height centers the GIF on the clicked point
//   let targetX = event.clientX - gifWidth / 2;  // Horizontal position where the GIF should move, centered
//   let targetY = event.clientY - gifHeight / 2;  // Vertical position where the GIF should move, centered

//   // Get the current position of the GIF in the viewport (bounding rectangle)
//   const gifRect = gif.getBoundingClientRect();  // Returns the size and position of the GIF element
//   const gifX = gifRect.left;  // Gets the current X position (left) of the GIF

//   // Check if the click is to the left or right of the current GIF position
//   let scaleXDirection = 1;  // Default direction: face right
//   if (targetX < gifX) {  // If the target X is to the left of the current GIF X position
//     scaleXDirection = -1;  // Change the direction to face left by flipping horizontally
//   }

//   // Ensure that the GIF doesn't go out of the left and top boundaries of the screen
//   if (targetX < 0) targetX = 0;  // If the target X is less than 0, set it to 0 (left boundary)
//   if (targetY < 0) targetY = 0;  // If the target Y is less than 0, set it to 0 (top boundary)

//   // Ensure that the GIF doesn't go out of the right and bottom boundaries of the screen
//   if (targetX + gifWidth > screenWidth) targetX = screenWidth - gifWidth;  // Right boundary
//   if (targetY + gifHeight > screenHeight) targetY = screenHeight - gifHeight;  // Bottom boundary

//   // Apply smooth movement and flipping to the GIF
//   gif.style.transition = `transform 0.5s linear`;  // Set the transition speed for smooth movement
//   gif.style.transform = `translate(${targetX}px, ${targetY}px) scaleX(${scaleXDirection})`;  
//   // Move the GIF to the target position and apply the horizontal flip (scaleX)
// });
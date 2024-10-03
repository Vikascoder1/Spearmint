const gif = document.getElementById('walkingGif');

document.body.addEventListener('click', function (event) {
  // Get the size of the GIF
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  // Get the dimensions of the viewport
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Get the click position
  let targetX = event.clientX - gifWidth / 2; // Center the gif horizontally
  let targetY = event.clientY - gifHeight / 2; // Center the gif vertically

  // Ensure the GIF stays within screen boundaries
  if (targetX < 0) targetX = 0; // Left boundary
  if (targetY < 0) targetY = 0; // Top boundary
  if (targetX + gifWidth > screenWidth) targetX = screenWidth - gifWidth; // Right boundary
  if (targetY + gifHeight > screenHeight) targetY = screenHeight - gifHeight; // Bottom boundary

  // Move the GIF smoothly
  gif.style.transition = `transform 0.5s linear`;
  gif.style.transform = `translate(${targetX}px, ${targetY}px)`;
});


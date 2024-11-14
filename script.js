document.addEventListener('DOMContentLoaded', function() {
  console.log('Simple website is loaded!');

  // Example of adding an event listener
  const header = document.querySelector('header');
  header.addEventListener('click', function() {
    alert('Header clicked!');
  });
});
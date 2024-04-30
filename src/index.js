// Base URL for the API
const ramenUrl = 'http://localhost:3000/ramens';

// Callback to handle click on ramen image
const handleClick = (ramen) => {
  const detailImage = document.querySelector('.detail-image');
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

// Callback to add event listener to submit button in new-ramen form
const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('new-name').value;
    const restaurant = document.getElementById('new-restaurant').value;
    const image = document.getElementById('new-image').value;
    const rating = document.getElementById('new-rating').value;
    const comment = document.getElementById('new-comment').value;
    const newRamen = { name, restaurant, image, rating, comment };

    // Create a new img element for the new ramen and append it to the ramen-menu div
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    document.getElementById('ramen-menu').appendChild(img);
  });
};

// Function to fetch and display all ramens
const displayRamens = () => {
  fetch(ramenUrl)
    .then(res => res.json())
    .then(data => {
      const ramenMenuDiv = document.getElementById('ramen-menu');
      data.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenuDiv.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Error fetching ramens:', error);
    });
};

// Function to display ramens on the view page
const displayRamensOnTheViewPage = (ramensArray) => {
  // Add code to display ramens on the view page
};

// Main function to start the program logic
const main = () => {
  // Invoke displayRamens and addSubmitListener after the DOM has fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();
  });
};

// Invoke main function to start the program logic
main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

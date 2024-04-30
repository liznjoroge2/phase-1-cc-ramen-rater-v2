// Base URL for the API
const ramenUrl = 'http://localhost:3000/ramens';

// Callback to handle click on ramen image
const handleClick = (ramen) => {
  // Add code to display ramen details in the ramen-detail div
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

    // Add code to create a new ramen and add it to the ramen-menu div
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
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
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

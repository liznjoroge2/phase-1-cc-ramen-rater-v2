let ramens = [];

document.addEventListener('DOMContentLoaded', main);

function main() {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();
  });
}

function displayRamens() {
  getRamens().then((data) => {
    ramens = data;
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';
    ramens.forEach((ramen) => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
    });
  });
}

function handleClick(ramen) {
  const ramenDetail = document.getElementById('ramen-detail');
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
}

function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const newRamen = {
      name: formData.get('name'),
      restaurant: formData.get('restaurant'),
      image: formData.get('image'),
      rating: formData.get('rating'),
      comment: formData.get('new-comment'),
    };
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    document.getElementById('ramen-menu').appendChild(img);
  });
}

main();

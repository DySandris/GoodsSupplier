// Load favorites from localStorage
function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = "";
  
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    if (favorites.length === 0) {
      favoritesList.innerHTML = "<p>No favorites added yet!</p>";
      return;
    }
  
    favorites.forEach(product => {
      const item = document.createElement('div');
      item.className = 'favorite-item';
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: Rs ${product.price}</p>
        <button class="remove-fav-btn" onclick="removeFavorite('${product.id}')">Remove Favorite</button>
      `;
      favoritesList.appendChild(item);
    });
  }
  
  // Remove a favorite
  function removeFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(product => product.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites(); // Reload the list
  }
  
  // Load favorites on page load
  window.onload = loadFavorites;
  
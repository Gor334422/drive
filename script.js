let cart = [];
    function addToCart(product, price) {
      cart.push({ product, price });
      alert(`Добавлено՝ ${product} (${price} драм)`);
}

  const langBtn = document.querySelector('.lang-btn');
  const dropdown = document.querySelector('.lang-dropdown');

  langBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });


// Akkauntlar (mana shu yerga yangi akkountni paste qilsa bo'ladi)
const accounts = [
  {
    title: "PUBG Mobile Level 70",
    price: 8000,
    image: "https://via.placeholder.com/300x180",
    telegram: "https://t.me/seller1",
    promo: true
  },
  {
    title: "Free Fire Diamond Full",
    price: 12000,
    image: "https://via.placeholder.com/300x180",
    telegram: "https://t.me/seller2",
    promo: false
  },
  {
    title: "Clash Royale Max",
    price: 10000,
    image: "https://via.placeholder.com/300x180",
    telegram: "https://t.me/seller3",
    promo: true
  }
];

// Foydalanuvchi tanlagan sort
const sortSelect = document.getElementById('sort');
sortSelect.addEventListener('change', renderAccounts);

// Render funksiyasi
function renderAccounts() {
  let sortType = sortSelect.value;
  let sorted = [...accounts];
  sorted.sort((a, b) => sortType === 'asc' ? a.price - b.price : b.price - a.price);

  let container = document.getElementById("accountsContainer");
  container.innerHTML = "";
  sorted.forEach(acc => {
    container.innerHTML += `
      <div class="bg-white rounded shadow p-4">
        <img src="${acc.image}" class="rounded mb-2 w-full h-40 object-cover">
        <h3 class="text-lg font-bold">${acc.title}</h3>
        <p class="text-green-600 font-semibold">${acc.price} so'm</p>
        <a href="${acc.telegram}" target="_blank">
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Sotib olish</button>
        </a>
      </div>
    `;
  });
}

// Reklama almashuvi
function renderPromoAccounts() {
  let promos = accounts.filter(a => a.promo);
  let container = document.getElementById("promoContainer");
  let index = 0;

  function rotate() {
    container.innerHTML = "";
    const acc = promos[index];
    container.innerHTML = `
      <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 shadow rounded">
        <img src="${acc.image}" class="rounded mb-2 w-full h-40 object-cover">
        <h3 class="text-lg font-bold">${acc.title}</h3>
        <p class="text-yellow-800 font-semibold">${acc.price} so'm</p>
        <a href="${acc.telegram}" target="_blank">
          <button class="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Sotib olish</button>
        </a>
      </div>
    `;
    index = (index + 1) % promos.length;
  }

  rotate();
  setInterval(rotate, 5000); // Har 5 sekundda reklama yangilanadi
}

// Boshlash
renderAccounts();
renderPromoAccounts();

const sortSelect = document.getElementById('sort');
const searchInput = document.getElementById('search');

sortSelect.addEventListener('change', renderAccounts);
searchInput.addEventListener('input', renderAccounts);

function renderAccounts() {
  let sortType = sortSelect.value;
  let search = searchInput.value.toLowerCase();
  let sorted = accounts.filter(acc => acc.title.toLowerCase().includes(search) || acc.description.toLowerCase().includes(search));
  sorted.sort((a, b) => sortType === 'asc' ? a.price - b.price : b.price - a.price);

  let container = document.getElementById("accountsContainer");
  container.innerHTML = "";
  sorted.forEach(acc => {
    container.innerHTML += `
      <div class="bg-white rounded shadow p-4">
        <div class="flex space-x-2 overflow-x-auto mb-2">
          ${acc.images.map(img => `<img src="${img}" class="w-32 h-20 object-cover rounded border">`).join('')}
        </div>
        <h3 class="text-lg font-bold">${acc.title}</h3>
        <p class="text-green-600 font-semibold">${acc.price} so'm</p>
        <p class="whitespace-pre-line text-sm text-gray-700 mt-2">${acc.description}</p>
        <a href="${acc.telegram}" target="_blank">
          <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Sotib olish</button>
        </a>
      </div>
    `;
  });
}

function renderPromoAccounts() {
  let promos = accounts.filter(a => a.promo);
  let container = document.getElementById("promoContainer");
  let index = 0;

  function rotate() {
    if (promos.length === 0) {
      container.innerHTML = "<p class='text-gray-500'>Hozircha reklama yo'q.</p>";
      return;
    }
    const acc = promos[index];
    container.innerHTML = `
      <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 shadow rounded">
        <img src="${acc.images[0]}" class="rounded mb-2 w-full h-40 object-cover">
        <h3 class="text-lg font-bold">${acc.title}</h3>
        <p class="text-yellow-800 font-semibold">${acc.price} so'm</p>
        <p class="text-sm text-gray-700 whitespace-pre-line mb-2">${acc.description}</p>
        <a href="${acc.telegram}" target="_blank">
          <button class="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Sotib olish</button>
        </a>
      </div>
    `;
    index = (index + 1) % promos.length;
  }

  rotate();
  setInterval(rotate, 5000);
}

renderAccounts();
renderPromoAccounts();

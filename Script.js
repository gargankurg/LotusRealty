// Sample listings data — edit this to add real properties
const listings = [
  {
    id: 1,
    title: "2 BHK | NIBM Annex | Semi-Furnished",
    location: "NIBM Annex",
    type: "Rent",
    bhk: "2 BHK",
    price: "₹32,000/mo",
    area: "835 sq ft",
    image: "assets/images/Img1.webp",
    features: ["Modular Kitchen", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  },
  {
    id: 2,
    title: "3 BHK | Mohammed Wadi | For Sale",
    location: "Mohammed Wadi",
    type: "Rent",
    bhk: "3 BHK",
    price: "₹38,000/mo",
    area: "1250 sq ft",
    image: "assets/images/Img2.jpg",
    features: ["Modular Kitchen", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  },
  {
    id: 3,
    title: "1 BHK | Undri | Budget Rent",
    location: "Mohammed Wadi",
    type: "Sale",
    bhk: "1 BHK",
    price: "₹48 Lakh",
    area: "685 sq ft",
    image: "assets/images/Img3.jpg",
    features: ["Modular Kitchen", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  },
  {
    id: 1,
    title: "2 BHK | NIBM Annex ",
    location: "NIBM Annex",
    type: "Sale",
    bhk: "2 BHK",
    price: "₹85 Lakh",
    area: "835 sq ft",
    image: "assets/images/Img4.jpg",
    features: ["Modular Kitchen", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  },
  {
    id: 5,
    title: "2 BHK | NIBM Annex | Family Home",
    location: "NIBM Annex",
    type: "Rent",
    bhk: "2 BHK",
    price: "₹30,000/mo",
    area: "880 sq ft",
    image: "assets/images/Img5.jpg",
    features: ["Modular Kitchen", "AC", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  },
  {
    id: 1,
    title: "2 BHK | NIBM Annex | Semi-Furnished",
    location: "NIBM Annex",
    type: "Sale",
    bhk: "2 BHK",
    price: "₹85 Lakh",
    area: "835 sq ft",
    image: "assets/images/Img6.webp",
    features: ["Modular Kitchen", "Balcony", "Covered Parking", "Gated Security", "Club House", "Gym", "Kids Playing Area"]
  }
];

function renderCards(data) {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';
  if (!data.length) {
    cards.innerHTML = '<p class="text-gray-600">No properties match your filters. Try changing the search.</p>';
    return;
  }
  data.forEach(item => {
    const card = document.createElement('article');
    card.className = 'bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition';
    card.innerHTML = `
      <div class="aspect-[4/3] overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-lg">${item.title}</h3>
        <p class="text-sm text-gray-600 mt-1">${item.location} • ${item.bhk} • ${item.area}</p>
        <p class="mt-2 font-semibold text-lotus-700">${item.price}</p>
        <ul class="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
          ${item.features.map(f => `<li class="px-2 py-1 rounded-full bg-gray-100 border">${f}</li>`).join('')}
        </ul>
        <div class="mt-4 flex gap-2">
          <a href="https://wa.me/919999999999?text=I%20am%20interested%20in%20${encodeURIComponent(item.title)}" class="flex-1 text-center px-3 py-2 rounded-xl bg-lotus-600 text-white hover:bg-lotus-700">WhatsApp</a>
          <a href="#contact" class="flex-1 text-center px-3 py-2 rounded-xl border hover:bg-gray-50">Enquire</a>
        </div>
      </div>
    `;
    cards.appendChild(card);
  });
}

function applyFilters(e) {
  if (e) e.preventDefault();
  const loc = document.getElementById('filterLocation').value;
  const type = document.getElementById('filterType').value;
  const bhk = document.getElementById('filterBhk').value;
  const filtered = listings.filter(l => 
    (loc ? l.location === loc : true) &&
    (type ? l.type === type : true) &&
    (bhk ? l.bhk === bhk : true)
  );
  renderCards(filtered);
}

document.getElementById('searchForm').addEventListener('submit', applyFilters);
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
document.getElementById('menuBtn').addEventListener('click', () => {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('hidden');
});

// Initial render
renderCards(listings);

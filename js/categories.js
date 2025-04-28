document.addEventListener('DOMContentLoaded', function() {
  // Your categories from the image (4 lines x 6 categories)
  const categoryLines = [
    // Line 1 (Art Supplies)
    [
      {name: "Paints", icon: "🎨"},
      {name: "Brushes", icon: "🖌️"},
      {name: "Canvases", icon: "🖼️"},
      {name: "Easels", icon: "🎨"},
      {name: "Sketchbooks", icon: "📓"},
      {name: "Pencils", icon: "✏️"}
    ],
    // Line 2 (Fitness)
    [
      {name: "Fitness Trackers", icon: "⌚"},
      {name: "Gym Bags", icon: "🎒"},
      {name: "Water Bottles", icon: "💧"},
      {name: "Heart Monitors", icon: "❤️"},
      {name: "Massage Guns", icon: "🔫"},
      {name: "Foam Rollers", icon: "🔄"}
    ],
    // Line 3 (Photography)
    [
      {name: "Lighting Equipment", icon: "💡"},
      {name: "Green Screens", icon: "🟢"},
      {name: "Stabilizers", icon: "✋"},
      {name: "Microphones", icon: "🎤"},
      {name: "Batteries", icon: "🔋"},
      {name: "Chargers", icon: "⚡"}
    ],
    // Line 4 (Audio)
    [
      {name: "Karaoke Machines", icon: "🎤"},
      {name: "Vinyl Players", icon: "💿"},
      {name: "CD Players", icon: "📀"},
      {name: "Cassette Decks", icon: "📼"},
      {name: "Equalizers", icon: "⚖️"},
      {name: "Effects Processors", icon: "🎛️"}
    ]
  ];

  const sliderWrapper = document.querySelector('.slider-wrapper');
  const prevBtn = document.querySelector('.left');
  const nextBtn = document.querySelector('.right');
  let currentPosition = 0;
  const cardWidth = 175; // width + gap

  // Create 4 lines with 6 categories each
  categoryLines.forEach((lineCategories, index) => {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'slider-line';
    lineDiv.id = `line-${index+1}`;
    
    lineCategories.forEach(category => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML = `
        <span class="category-icon">${category.icon}</span>
        <span>${category.name}</span>
      `;
      card.addEventListener('click', () => {
        window.location.href = `products.html?category=${encodeURIComponent(category.name)}`;
      });
      lineDiv.appendChild(card);
    });
    
    sliderWrapper.appendChild(lineDiv);
  });

  // Slider navigation
  nextBtn.addEventListener('click', () => {
    const maxScroll = -(document.querySelector('.slider-line').scrollWidth - sliderWrapper.offsetWidth);
    currentPosition = Math.max(currentPosition - (cardWidth * 2), maxScroll);
    document.querySelectorAll('.slider-line').forEach(line => {
      line.style.transform = `translateX(${currentPosition}px)`;
    });
  });

  prevBtn.addEventListener('click', () => {
    currentPosition = Math.min(currentPosition + (cardWidth * 2), 0);
    document.querySelectorAll('.slider-line').forEach(line => {
      line.style.transform = `translateX(${currentPosition}px)`;
    });
  });
});
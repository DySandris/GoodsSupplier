document.addEventListener('DOMContentLoaded', function() {
  // Your categories from the image (4 lines x 6 categories)
  const categoryLines = [
    // Line 1 
[
  {name: "Apparel", icon: "👕"},
  {name: "Fashion Accessories", icon: "👜"},
  {name: "Shoes & Accessories", icon: "👟"},
  {name: "Luggage, Bags & Cases", icon: "🎒"},
  {name: "Jewelry, Eyewear, Watches", icon: "💍"},
  {name: "Watches", icon: "⌚"},
  {name: "Consumer Electronics", icon: "📱"},
  {name: "Mobile Phone & Accessories", icon: "📱"},
  {name: "Computer Hardware & Software", icon: "💻"},
  {name: "Home & Garden", icon: "🏡"},
  {name: "Beauty & Personal Care", icon: "💅"},
  {name: "Health & Medical", icon: "🏥"},
  {name: "Baby Products", icon: "🍼"},
  {name: "Toys & Hobbies", icon: "🧸"},
  {name: "Pet Supplies", icon: "🐾"},
  {name: "Sports & Entertainment", icon: "⚽"},
  {name: "Automobiles & Motorcycles", icon: "🚗"},
  {name: "Lights & Lighting", icon: "💡"},
  {name: "Furniture", icon: "🪑"},
  {name: "Bags, Shoes & Accessories", icon: "👠"},
  {name: "Home Appliances", icon: "🍳"},
  {name: "Electronic Components", icon: "🔌"},
  {name: "Packaging & Printing", icon: "📦"},
  {name: "Weddings & Events", icon: "💒"},
  {name: "Stationery & School Supplies", icon: "📚"}
],

    // Line 2 
[
  {name: "Telecommunications", icon: "📡"},
  {name: "Video Games & Accessories", icon: "🎮"},
  {name: "VR, AR, MR Hardware & Software", icon: "🕶️"},
  {name: "Machinery", icon: "⚙️"},
  {name: "Tools", icon: "🛠️"},
  {name: "Construction & Real Estate", icon: "🏗️"},
  {name: "Building Materials", icon: "🧱"},
  {name: "Solar Energy Products", icon: "🔆"},
  {name: "Office & School Supplies", icon: "📎"},
  {name: "Security & Protection", icon: "🛡️"},
  {name: "Renewable Energy", icon: "🌞"},
  {name: "Agriculture", icon: "🌾"},
  {name: "Metallurgy, Chemicals, Rubber & Plastics", icon: "🧪"},
  {name: "Textile & Leather Products", icon: "👗"},
  {name: "Printing & Publishing", icon: "🖨️"},
  {name: "Measurement & Analysis Instruments", icon: "📏"},
  {name: "Pet Products", icon: "🐶"},
  {name: "Mother & Baby Products", icon: "🤱"},
  {name: "Home Textile", icon: "🛏️"},
  {name: "Smart Home", icon: "🏠"},
  {name: "Vehicle Parts & Accessories", icon: "🛞"},
  {name: "Car Electronics", icon: "📻"},
  {name: "Sportswear", icon: "🥋"},
  {name: "Outdoor Equipment", icon: "🏕️"},
  {name: "Camping & Hiking", icon: "🎒"}
],
 // Line 3 
[
  {name: "Bicycles & Accessories", icon: "🚲"},
  {name: "Bathroom Products", icon: "🚿"},
  {name: "Medical Devices", icon: "🩺"},
  {name: "Personal Protective Equipment", icon: "🦺"},
  {name: "Industrial Equipment & Components", icon: "🏗️"},
  {name: "General Industrial Equipment", icon: "🔧"},
  {name: "Agricultural Equipment", icon: "🚜"},
  {name: "Cleaning Supplies", icon: "🧽"},
  {name: "Shoes", icon: "👞"},
  {name: "Fabric & Textile Raw Material", icon: "🧵"},
  {name: "Eyewear", icon: "🕶️"},
  {name: "Lingerie", icon: "👙"},
  {name: "Men’s Clothing", icon: "👔"},
  {name: "Women’s Clothing", icon: "👗"},
  {name: "Kids’ Clothing", icon: "🧒"},
  {name: "Cosmetics", icon: "💄"},
  {name: "Skincare", icon: "🧴"},
  {name: "Hair Care", icon: "💇"},
  {name: "Bath & Body", icon: "🛁"},
  {name: "Nail Supplies", icon: "💅"},
  {name: "Makeup Tools", icon: "🖌️"},
  {name: "Fitness Equipment", icon: "🏋️"},
  {name: "Musical Instruments", icon: "🎸"},
  {name: "Audio Equipment", icon: "🎧"},
  {name: "Photography Equipment", icon: "📷"}
],

  // Line 4 
[
  {name: "Kitchen Appliances", icon: "🍽️"},
  {name: "Cookware", icon: "🍳"},
  {name: "Tableware", icon: "🍴"},
  {name: "Drinkware", icon: "🥤"},
  {name: "Bedding", icon: "🛌"},
  {name: "Curtains & Accessories", icon: "🪟"},
  {name: "Rugs & Carpets", icon: "🧶"},
  {name: "Wall Art", icon: "🖼️"},
  {name: "Decorative Items", icon: "🪞"},
  {name: "Office Furniture", icon: "🪑"},
  {name: "School Furniture", icon: "🏫"},
  {name: "Storage & Organization", icon: "📦"},
  {name: "Lighting Accessories", icon: "🔦"},
  {name: "Power Supplies", icon: "🔋"},
  {name: "Batteries & Chargers", icon: "⚡"},
  {name: "Wires & Cables", icon: "🧵"},
  {name: "Displays & Signs", icon: "🪧"},
  {name: "Advertising Equipment", icon: "📢"},
  {name: "Retail Displays", icon: "🛍️"},
  {name: "Financial Services", icon: "💳"},
  {name: "Digital Media & Entertainment", icon: "📺"},
  {name: "Software", icon: "💾"},
  {name: "Education & Training", icon: "🎓"},
  {name: "Workplace Safety Supplies", icon: "⚠️"},
  {name: "Office Electronics", icon: "🖥️"}
],

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
const container = document.getElementById("imgs");

const images = [
  "images/cameron.jpg",
  "images/ducks.jpg",
  "images/EOSR0109.jpg",
  "images/EOSR0126.jpg",
  "images/EOSR0159.jpg",
  "images/EOSR0183.jpg",
  "images/EOSR0219 V2.jpg",
  "images/EOSR0249.jpg",
  "images/EOSR0252.jpg",
  "images/EOSR0295.jpg",
  "images/EOSR0610 - 3.jpg",
];

function renderPhotos() {
  for (let i = 0; i < images.length; i++) {
    container.innerHTML = `<div class="img-container">
                <img src="${i}" class="img-zoom">
            </div>`;
  }
}

// renderPhotos();

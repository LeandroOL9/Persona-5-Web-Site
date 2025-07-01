const items = document.querySelectorAll('#carousel-items > div');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.style.opacity = (i === index) ? '1' : '0';
    item.style.pointerEvents = (i === index) ? 'auto' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

showItem(currentIndex);

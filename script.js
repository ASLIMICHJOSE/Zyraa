const openSearch = document.getElementById('openSearch');
const searchPanel = document.getElementById('searchPanel');
const closeSearch = document.getElementById('closeSearch');

openSearch.addEventListener('click', () => {
  searchPanel.style.display = 'block';
  openSearch.classList.add(''); // Show underline
});

closeSearch.addEventListener('click', () => {
  searchPanel.style.display = 'none';
  openSearch.classList.remove('active'); // Hide underline
});

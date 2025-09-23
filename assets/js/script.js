const navBtn = document.getElementById('navBtn');
const mobileNav = document.getElementById('mobileNav');
if (navBtn) {
  navBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
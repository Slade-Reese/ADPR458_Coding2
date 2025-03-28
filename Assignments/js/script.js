const toggleBtn = document.getElementById("toggle-button");
const NavListItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener('click', function () => {
    NavListItems.classList.toggle('active');
});

document.getElementById('search-toggle').addEventListener('click', function() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('show');
});

function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function toggleSearchBar() {
    var searchBar = document.querySelector('.search-bar');
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
}

const modal = document.getElementById('product-modal');
const closeModal = document.getElementsByClassName('close')[0];

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');

searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('show');
});


const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});


function toggleHamburgerMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

function toggleDropdownOptions(element) {
    var dropdownOptions = element.querySelector('.dropdown-options');
    if (dropdownOptions) {
        dropdownOptions.classList.toggle('show');
    }
}

var menuItems = document.querySelectorAll('nav a');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var nav = document.querySelector('nav ul');
        nav.classList.remove('show');
    });
});

var hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

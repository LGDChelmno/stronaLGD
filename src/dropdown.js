function toggleDropdownOptions(element) {
    var options = element.querySelector('.dropdown-options');
    options.classList.toggle("active");
}

var dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownMenus.forEach(function (menu) {
    var span = menu.querySelector('span');
    var options = menu.querySelector('.dropdown-options');

    span.addEventListener('mouseover', function () {
        options.classList.add("active");
    });

    span.addEventListener('mouseout', function (event) {
        if (!menu.contains(event.relatedTarget) && !options.contains(event.relatedTarget)) {
            options.classList.remove("active");
        }
    });

    options.addEventListener('mouseover', function () {
        options.classList.add("active");
    });

    options.addEventListener('mouseout', function (event) {
        if (!menu.contains(event.relatedTarget) && !span.contains(event.relatedTarget)) {
            options.classList.remove("active");
        }
    });
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleServices() {
    var servicesDropdown = document.getElementById("servicesDropdown");
    servicesDropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function toggleLsr() {
    var servicesDropdown = document.getElementById("lsrDropdown");
    servicesDropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.icon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


// scroll na main
window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".animate");
    elements.forEach(function (element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("appear");
        }
    });
});


// zakładki w konkurs
function showTab(tabId) {
    // Ukryj wszystkie zakładki
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Pokaż wybraną zakładkę
    var activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');

    // Zaznacz aktywną zakładkę w menu
    var tabButtons = document.getElementsByClassName('tab');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    document.querySelector('[onclick="showTab(\'' + tabId + '\')"]').classList.add('active');
}


// photos full screen in posts
function showFullImage(imageUrl) {
    // Tworzymy nowy element obrazu pełnoekranowego
    var fullImage = document.createElement('img');
    fullImage.src = imageUrl;
    fullImage.alt = 'Full Image';

    // Tworzymy overlay (nakładkę) do wyświetlania obrazu na całym ekranie
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(fullImage);

    // Dodajemy overlay do body dokumentu
    document.body.appendChild(overlay);

    // Dodajemy obsługę zdarzenia do zamknięcia obrazu po kliknięciu
    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });
}
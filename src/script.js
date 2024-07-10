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


// zakładki w konkurs i lsr ?
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


// photos fullscreen in posts
function showFullImage(imageUrl) {
    // Tworzymy nowy element obrazu pełnoekranowego
    var fullImage = document.createElement('img');
    fullImage.src = imageUrl;
    fullImage.alt = 'Full Image';
    fullImage.style.maxWidth = '100%';
    fullImage.style.maxHeight = '100%';

    // Tworzymy overlay (nakładkę) do wyświetlania obrazu na całym ekranie
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(fullImage);

    // Stylizujemy overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    // Dodajemy overlay do body dokumentu
    document.body.appendChild(overlay);

    // Dodajemy obsługę zdarzenia do zamknięcia overlay po kliknięciu
    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });
}


//wcag
function togglePanel() {
    const panel = document.getElementById('accessibility-panel');
    const isOpen = panel.style.left === '0px';
    panel.style.left = isOpen ? '-300px' : '0px';
}

function underlineLinks() {
    document.body.classList.toggle('underline-links');
    document.header.classList.toggle('underline-links');
}

function toggleContrast() {
    document.body.classList.remove('green-contrast');
    document.body.classList.remove('yellow-contrast');
    document.body.classList.toggle('high-contrast');
    document.header.classList.toggle('high-contrast');
  }

function toggleContrastYellow(){
    document.body.classList.remove('high-contrast');
    document.body.classList.remove('green-contrast');
    document.body.classList.toggle('yellow-contrast');
    document.header.classList.toggle('yellow-contrast');
}

function toggleContrastGreen(){
    document.body.classList.remove('high-contrast');
    document.body.classList.remove('yellow-contrast');
    document.body.classList.toggle('green-contrast');
    document.header.classList.toggle('green-contrast');
}

function toggleFontUp(){
    document.body.classList.toggle('font-up');
    document.header.classList.toggle('font-up');
}

document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('searchIcon');
    var searchContainer = document.querySelector('.search-container');
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');

    searchIcon.addEventListener('click', function() {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.style.display = 'block';
            searchButton.style.display = 'block';
        } else {
            searchInput.style.display = 'none';
            searchButton.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', function() {
        var searchWord = searchInput.value.toLowerCase();
        if (searchWord) {
            var paragraphs = document.querySelectorAll('.lane-1 p, .aktualnosci-container p');
            paragraphs.forEach(function(paragraph) {
                var regex = new RegExp(searchWord, 'gi');
                paragraph.innerHTML = paragraph.textContent.replace(regex, function(match) {
                    return '<span class="highlight">' + match + '</span>';
                });
            });
        }
    });
});

  

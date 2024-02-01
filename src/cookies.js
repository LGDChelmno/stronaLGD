// Inicjalizacja Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Pobierz identyfikator Google Analytics lub użyj wartości domyślnej
const analyticsId = 'G-9FZN7890RP';

// Sprawdź, czy okno informacyjne zostało już pokazane
function isCookieInfoShown() {
    return localStorage.getItem('cookieInfoShown') === 'true';
}

// Dodaj dynamicznie skrypt do strony z identyfikatorem Google Analytics tylko jeśli okno nie zostało pokazane
if (!isCookieInfoShown()) {
    const scriptElement = document.createElement('script');
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    scriptElement.async = true;

    // Obsługa zdarzenia załadowania skryptu
    scriptElement.onload = function () {
        // Inicjalizacja Google Analytics po załadowaniu skryptu
        gtag('js', new Date());
        gtag('config', analyticsId);
    };

    document.head.appendChild(scriptElement);
}

// Funkcja do sprawdzania stanu plików cookies
function checkCookiesAccepted() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}

// Sprawdzanie, czy Google Analytics zostało wyłączone przez użytkownika
function isAnalyticsDisabled() {
    return localStorage.getItem('analyticsDisabled') === 'true';
}

// Sprawdź stan plików cookies przy załadowaniu strony
if (checkCookiesAccepted() && !isAnalyticsDisabled()) {
    // Uruchom Google Analytics tylko jeśli użytkownik zaakceptował pliki cookie i nie wyłączył śledzenia
    gtag('js', new Date());
    gtag('config', analyticsId);
}

// Dodaj informację o pokazaniu okna do pamięci lokalnej po kliknięciu przycisku "Rozumiem"
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookieInfoShown', 'true'); // Ustawienie informacji o pokazaniu okna
    checkCookiesAccepted(); // Sprawdź stan po zaakceptowaniu cookies
}

// Dodaj informację o pokazaniu okna do pamięci lokalnej po kliknięciu przycisku "Wyłącz cookies"
function disableAnalytics() {
    gtag('config', analyticsId, { 'send_page_view': false });
    localStorage.setItem('analyticsDisabled', 'true');
    localStorage.setItem('cookieInfoShown', 'true'); // Ustawienie informacji o pokazaniu okna
    document.getElementById('cookie-container').style.display = 'none'; // Ukryj okno informacyjne po wyłączeniu cookies
}

// Sprawdzenie, czy okno informacyjne zostało pokazane po załadowaniu strony
if (isCookieInfoShown()) {
    document.getElementById('cookie-container').style.display = 'none';
}

// Inicjalizacja Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Pobierz identyfikator Google Analytics lub użyj wartości domyślnej
const analyticsId = 'G-2568NDYVRP';

// Dodaj dynamicznie skrypt do strony z identyfikatorem Google Analytics
const scriptElement = document.createElement('script');
scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=G-2568NDYVRP`;
scriptElement.async = true;

// Obsługa zdarzenia załadowania skryptu
scriptElement.onload = function () {
    // Inicjalizacja Google Analytics po załadowaniu skryptu
    gtag('js', new Date());
    gtag('config', analyticsId);
};

document.head.appendChild(scriptElement);

// Funkcja sprawdzająca, czy użytkownik podjął decyzję
function isUserDecisionMade() {
    return localStorage.getItem('userDecisionMade') === 'false';
}

function isCookieInfoShown() {
    return localStorage.getItem('cookieInfoShown') === 'true';
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
if (checkCookiesAccepted() && !isAnalyticsDisabled() && isUserDecisionMade()) {
    // Uruchom Google Analytics tylko jeśli użytkownik zaakceptował pliki cookie, nie wyłączył śledzenia i podjął decyzję
    gtag('js', new Date());
    gtag('config', analyticsId);
}

// Funkcja do akceptowania plików cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsDisabled', 'false');
    localStorage.setItem('cookieInfoShown', 'true');
    localStorage.setItem('userDecisionMade', 'true');
    checkCookiesAccepted(); // Sprawdź stan po zaakceptowaniu cookies
    closeCookieContainer(); // Zamknij okno informacyjne po zaakceptowaniu cookies
}

// Funkcja do wyłączania Google Analytics
function disableAnalytics() {
    localStorage.setItem('analyticsDisabled', 'true');
    localStorage.setItem('cookiesAccepted', 'false');
    localStorage.setItem('cookieInfoShown', 'true');
    localStorage.setItem('userDecisionMade', 'true');
    checkCookiesAccepted(); // Sprawdź stan po wyłączeniu cookies
    closeCookieContainer(); // Zamknij okno informacyjne po wyłączeniu cookies
}

if (!isCookieInfoShown() && !isUserDecisionMade()) {
    document.getElementById('cookie-container').style.display = 'block';
}


if (isCookieInfoShown()) {
    // Kod do pokazania okna informacyjnego o ciasteczkach
    document.getElementById('cookie-container').style.display = 'none';
}

// Funkcja do zamykania okna informacyjnego
function closeCookieContainer() {
    document.getElementById('cookie-container').style.display = 'none';
}

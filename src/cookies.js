// Inicjalizacja Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Pobierz identyfikator Google Analytics lub użyj wartości domyślnej
const analyticsId = 'G-9FZN7890RP';

// Dodaj dynamicznie skrypt do strony z identyfikatorem Google Analytics
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

// Funkcja do sprawdzania stanu plików cookies
function checkCookiesAccepted() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}

// Funkcja do akceptowania plików cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    // Sprawdź stan po zaakceptowaniu plików cookies
    checkCookiesAccepted();
    // Uruchom Google Analytics po zaakceptowaniu plików cookies
    if (!isAnalyticsDisabled()) {
        gtag('js', new Date());
        gtag('config', analyticsId);
    }
}

// Funkcja do wyłączania Google Analytics
function disableAnalytics() {
    gtag('config', analyticsId, { 'send_page_view': false });
    localStorage.setItem('analyticsDisabled', 'true');
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

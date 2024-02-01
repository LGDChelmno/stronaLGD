// cookies.js

// Funkcja do pobierania identyfikatora Google Analytics z pliku cookies
function getAnalyticsIdFromCookies() {
    const cookieString = document.cookie;
    const cookiesArray = cookieString.split(';');
  
    for (const cookie of cookiesArray) {
      const [name, value] = cookie.split('=').map(item => item.trim());
  
      if (name === 'analyticsId') {
        return value;
      }
    }
  
    return null;
  }
  
  // Inicjalizacja Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  
  // Pobierz identyfikator Google Analytics z pliku cookies lub użyj wartości domyślnej
  const analyticsId = getAnalyticsIdFromCookies() || 'default_id'; // Domyślne ID, jeśli nie ma w plikach cookies
  
  gtag('js', new Date());
  
  // Dodaj dynamicznie skrypt do strony z identyfikatorem Google Analytics
  const scriptElement = document.createElement('script');
  scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  scriptElement.async = true;
  
  // Obsługa zdarzenia załadowania skryptu
  scriptElement.onload = function () {
    // Inicjalizacja Google Analytics po załadowaniu skryptu
    gtag('config', analyticsId);
  };
  
  document.head.appendChild(scriptElement);
  
  // Funkcja do sprawdzania stanu plików cookies
  function checkCookiesAccepted() {
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
      document.getElementById('cookie-container').style.display = 'block';
    } else {
      document.getElementById('cookie-container').style.display = 'none';
    }
  }
  
  // Funkcja do ukrywania okna informacyjnego po zaakceptowaniu cookies
  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    checkCookiesAccepted(); // Sprawdź stan po zaakceptowaniu cookies
  }
  
  // Funkcja do wyłączania Google Analytics
  function disableAnalytics() {
    gtag('config', analyticsId, { 'send_page_view': false });
    localStorage.setItem('analyticsDisabled', 'true');
    document.getElementById('cookie-container').style.display = 'none'; // Ukryj okno informacyjne po wyłączeniu cookies
  }
  
  // Sprawdź stan plików cookies przy załadowaniu strony
  checkCookiesAccepted();
  
  // Sprawdzanie, czy Google Analytics zostało wyłączone przez użytkownika
  if (localStorage.getItem('analyticsDisabled') === 'true') {
    disableAnalytics();
  }
  
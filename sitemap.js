const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const urls = [
    { url:'/src/', changefreq: 'weekly', priority: 1.0 },
    { url:'/src/aktualnosci', changefreq: 'weekly', priority: 1.0 },
    { url:'/src/czlonkostwolgd', changefreq: 'yearly', priority: 0.5 },
    { url:'/src/komisja-rewizyjnalgd', changefreq: 'yearly', priority: 0.5 },
    { url:'/src/konkursy', changefreq: 'monthly', priority: 0.7 },
    { url:'/src/kontakt.njk', changefreq: 'never', priority: 0.5 },
    { url:'/src/lsr-2016', changefreq: 'never', priority: 0.4 },
    { url:'/src/nasze-dzialania', changefreq: 'monthly', priority: 0.5 },
    { url:'/src/projekty', changefreq: 'monthly', priority: 0.5 },
    { url:'/src/radalgd', changefreq: 'yearly', priority: 0.5 },
    { url:'/src/rodo', changefreq: 'never', priority: 0.4 },
    { url:'/src/statutlgd', changefreq: 'never', priority: 0.4 },
    { url:'/src/stowarzyszenie', changefreq: 'never', priority: 0.5 },
    { url:'/src/zarzadlgd.njk', changefreq: 'yearly', priority: 0.5 },
];

const sitemapStream = new SitemapStream({ hostname: 'http://www.lgdchelmno.pl/' });

urls.forEach((url) => {
    sitemapStream.write(url);
});

// Zakończ strumień mapy witryny
sitemapStream.end();

// Konwertuj strumień do ciągu znaków
streamToPromise(Readable.from(sitemapStream))
  .then((data) => {
    // Zapisz mapę witryny do pliku
    fs.writeFileSync('sitemap.xml', data.toString());
  })
  .catch((error) => {
    console.error(error);
  });

console.log('Sitemap generated successfully');

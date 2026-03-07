// Functie om alle externe HTML componenten op te halen
function loadIncludes() {
    // Zoek alle elementen op de pagina die het attribuut 'data-include' hebben
    const elements = document.querySelectorAll('[data-include]');

    elements.forEach(el => {
        // Lees de naam/het pad van het bestand uit het attribuut
        const file = el.getAttribute('data-include');

        // Haal het bestand op
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Bestand niet gevonden: ' + file);
            })
            .then(data => {
                // Plak de HTML in de div
                el.innerHTML = data;
            })
            .catch(error => console.error('Fout bij het laden:', error));
    });
}

// Voer het script uit zodra de hoofd-HTML van de pagina geladen is
document.addEventListener('DOMContentLoaded', loadIncludes);
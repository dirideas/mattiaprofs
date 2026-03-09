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

//widget close on click logic
// Luister naar alle kliks op de hele pagina
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('vidiSidebar');

    // Controleer of de sidebar überhaupt op de pagina staat
    if (!sidebar) return;

    // Check of de sidebar momenteel open is
    if (sidebar.classList.contains('expanded')) {

        // Controleer of de klik BINNEN de sidebar was
        const isClickInsideSidebar = sidebar.contains(event.target);

        // Controleer of de klik op de hamburger/dashboard knop was
        const isClickOnToggle = event.target.closest('.sidebar-toggle');

        // Als de klik NIET in de sidebar was en NIET op de knop...
        if (!isClickInsideSidebar && !isClickOnToggle) {
            // ...sluit dan de sidebar!
            sidebar.classList.remove('expanded');
        }
    }
});

// --- Modal Functies voor Uitloggen ---

function toonUitlogModal(event) {
    event.preventDefault(); 
    const modal = document.getElementById('logoutModal');
    if (modal) {
        modal.style.display = 'flex'; 
    }
}

function sluitUitlogModal() {
    const modal = document.getElementById('logoutModal');
    if (modal) {
        modal.style.display = 'none'; 
    }
}

function bevestigUitloggen() {
    // Gaat correct naar login.html, onafhankelijk van in welke map je zit
    const basePath = window.location.pathname.includes('/overview/') ? '../' : '';
    window.location.href = basePath + 'login.html'; 
}

function toonUitlogModal(event) {
    event.preventDefault(); 
    
    // Sluit de sidebar
    const sidebar = document.getElementById('vidiSidebar');
    if (sidebar) {
        sidebar.classList.remove('expanded');
    }

    // Toon de modal in het midden
    const modal = document.getElementById('logoutModal');
    if (modal) {
        modal.style.display = 'flex'; 
    }
}

function sluitUitlogModal() {
    const modal = document.getElementById('logoutModal');
    if (modal) {
        modal.style.display = 'none'; 
    }
}

function bevestigUitloggen() {
    window.location.href = 'login.html'; 
}
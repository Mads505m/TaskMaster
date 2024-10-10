# TaskMaster
Skole opgave 10-10-2024

To-Do Taming: Skab Din Egen Taskmaster App
Opsummering
Denne opgave har til formål at lære dig at oprette en simpel to-do liste applikation uden brug af en database. Applikationen består af en backend bygget med Node.js og Express og en frontend baseret på HTML, CSS og JavaScript. Formålet er at skabe en fuldt funktionel to-do liste applikation, hvor du lærer at forbinde frontend og backend, håndtere HTTP-anmodninger, dynamisk opdatere UI-elementer og integrere frontend og backend uden en database.

Backend
Backend i denne applikation skal opsættes ved hjælp af Node.js og Express og indeholder følgende funktionalitet:

Funktionelle krav
Middleware til at parse JSON-data
Brug body-parser middleware til at håndtere JSON-data i HTTP-anmodninger.

Middleware til statiske filer
Brug express.static middleware til at tjene statiske filer fra en public-mappe.

Midlertidig lagring af opgaver
Opret et array til at opbevare opgaver midlertidigt på serveren.

CRUD Routes til opgaver

GET /tasks: Henter alle opgaver.
POST /tasks: Tilføjer en ny opgave.
PUT /tasks/
: Opdaterer en eksisterende opgave baseret på det givne indeks.
DELETE /tasks/
: Sletter en opgave baseret på det givne indeks.
Start serveren
Serveren skal lytte på en defineret port (for eksempel port 3000).

Frontend
Frontend i applikationen består af HTML, CSS og JavaScript med følgende funktionaliteter:

Funktionelle krav
HTML-struktur

Et input-felt til at indtaste nye opgaver.
En knap til at tilføje nye opgaver.
En ul-liste til at vise opgaver.
CSS-stilarter

Grundlæggende stilarter for at forbedre layoutet og udseendet af HTML-elementerne.
Stilarter til at markere opgaver som fuldført.
JavaScript-funktioner

Tilføjelse af opgave til listen:
Funktion til at tilføje en ny opgave til ul-listen og oprette en slet-knap og fuldført-knap for hver opgave.
Hentning af opgaver fra serveren:
Funktion til at sende en GET-anmodning til /tasks og opdatere listen med opgaver fra serveren.
Tilføjelse af ny opgave:
Funktion til at sende en POST-anmodning til /tasks med en ny opgave og opdatere listen.
Opdatering af opgave:
Funktion til at sende en PUT-anmodning til /tasks/:index for at opdatere en eksisterende opgave.
Sletning af opgave:
Funktion til at sende en DELETE-anmodning til /tasks/:index for at slette en opgave.
Event Listeners

Event listener til tilføj-knappen for at tilføje nye opgaver.
Event listeners til slet-knapper og fuldført-knapper for hver opgave for at håndtere opdatering og sletning af opgaver.

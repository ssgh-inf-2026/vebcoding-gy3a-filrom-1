const tlacitko = document.getElementById("testButton");
const vstup = document.getElementById("userInput");
const vystup = document.getElementById("result");
const kontejner = document.getElementById("resultContainer");

tlacitko.onclick = function() {
    const text = vstup.value.trim();

    // Resetujeme styly při každém kliknutí
    kontejner.classList.add("hidden");
    vystup.style.color = ""; 

    if (text === "") {
        ukazVysledek("Zadej známky!", "text-red-500");
        return;
    }

    // Převedeme vstup na pole čísel (podporuje mezery i čárky)
    const casti = text.split(/[\s,]+/);
    let soucet = 0;
    let pocet = 0;

    for (let i = 0; i < casti.length; i++) {
        const cislo = parseFloat(casti[i]);

        // Kontrola, zda je to číslo 1 až 5
        if (isNaN(cislo) || cislo < 1 || cislo > 5) {
            ukazVysledek("Jen známky 1-5!", "text-orange-500");
            return;
        }
        soucet += cislo;
        pocet++;
    }

    const prumer = (soucet / pocet).toFixed(2);
    ukazVysledek(prumer, "text-indigo-700");
};

// Funkce, která zobrazí kontejner a nastaví text
function ukazVysledek(text, barvaClass) {
    kontejner.classList.remove("hidden");
    vystup.textContent = text;
    
    // Odstraníme staré barvy a přidáme novou
    vystup.className = `text-center text-5xl font-black mt-2 ${barvaClass}`;
}

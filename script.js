// 1. Najdeme si prvky na stránce, se kterými budeme pracovat
const tlacitko = document.getElementById("testButton");
const vstup = document.getElementById("userInput");
const vystup = document.getElementById("result");

// 2. Nastavíme, co se má stát po kliknutí na tlačítko
tlacitko.onclick = function() {
    // Načteme text ze vstupu
    const text = vstup.value.trim();

    // Kontrola, jestli uživatel něco zadal
    if (text === "") {
        vystup.innerText = "Chyba: Zadej prosím nějaké známky.";
        vystup.style.color = "red";
        return; // Ukončíme funkci, aby kód nepokračoval dál
    }

    // Převedeme text na pole čísel
    // Rozdělíme text podle mezer nebo čárek a převedeme na desetinná čísla
    const znamky = text.split(/[\s,]+/).map(Number);

    // Výpočet průměru
    let soucet = 0;
    for (let i = 0; i < znamky.length; i++) {
        soucet = soucet + znamky[i];
    }

    const prumer = soucet / znamky.length;

    // 3. Zobrazení výsledku
    vystup.innerText = "Tvůj průměr je: " + prumer.toFixed(2);
    vystup.style.color = "black";
};

const form = document.getElementById("formular");
const rezultat = document.getElementById("rezultat");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("id").value;

    const object = await fetch(`http://localhost:3000/${id}`);
    const data = await object.json();

    rezultat.innerHTML = `<p>${data.nume} are ${data.varsta} ani.</p>`;
    document.getElementById("id").value = "";
});
const form = document.getElementById("formular");


const formSubmitHandler = (e) => {

    e.preventDefault();

    const table = document.getElementById("tabel");
    const nume = document.getElementById("nume").value;
    const telefon = document.getElementById("telefon").value;

    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${nume}</td><td>${telefon}</td>`;
    table.appendChild(tr);
}

form.onsubmit = formSubmitHandler;
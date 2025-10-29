const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("apasat");
})

const myEvent = new Event("hei");

const leaga = () => {
    document.dispatchEvent(myEvent);
}

const candClick = () => {
    alert("cick");
};

btn.onclick = leaga;
document.addEventListener("hei", candClick)
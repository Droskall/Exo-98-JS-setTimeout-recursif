let y = 1;

document.getElementById("interval-start").addEventListener("click", () => timeOut());

function timeOut() {
    let time = setTimeout(() => {
        document.getElementById("interval-div").innerHTML = y + "min";
        y += 1;
        if (y <= 10) {
            timeOut();
        }
    },  60000);

    document.getElementById("interval-stop").addEventListener("click", () => clearTimeout(time));
}
const cubeSelect = document.getElementById("cube-select");
const scrambleDiv = document.getElementById("scramble");

function selection(){
    const value = cubeSelect.value;

    if (value === "3x3") {
        const scramble = generate3x3();
        scrambleDiv.textContent = scramble.join(" ");
    } else {
        scrambleDiv.textContent = "";
    }
}

cubeSelect.addEventListener("change", () => { selection(); });

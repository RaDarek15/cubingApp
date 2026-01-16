const cubeSelect = document.getElementById("cube-select");
const nextBtn = document.getElementById("next-btn");
const scrambleDiv = document.getElementById("scramble");
const cubeArraysDiv = document.getElementById("cube-arrays");

function displayCube(cube) {
    cubeArraysDiv.innerHTML = '';
    for(const face in cube){
        const faceDiv = document.createElement('div');
        let text = `<strong>${face}:</strong><br>`;
        cube[face].forEach(row => text += row.join(' ') + '<br>');
        faceDiv.innerHTML = text;
        cubeArraysDiv.appendChild(faceDiv);
    }
}

function nextScramble() {
    if(cubeSelect.value === "3x3"){
        const scramble = generate3x3();
        scrambleDiv.textContent = scramble.join(' ');

        const cube = createSolvedCube(); // reset
        scramble.forEach(move => applyMove(cube, move));
        displayCube(cube);
    }
    else if(cubeSelect.value === "4x4"){
        const scramble = generate4x4();
        scrambleDiv.textContent = scramble.join(' ');
        cubeArraysDiv.innerHTML = '';
    }
    else if(cubeSelect.value === "5x5"){
        const scramble = generate5x5();
        scrambleDiv.textContent = scramble.join(' ');
        cubeArraysDiv.innerHTML = '';
    }
    else {
        scrambleDiv.textContent = '';
        cubeArraysDiv.innerHTML = '';
    }
}

nextBtn.addEventListener('click', nextScramble);
cubeSelect.addEventListener('change', nextScramble);

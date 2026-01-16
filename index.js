const cubeSelect = document.getElementById("cube-select");
const nextBtn = document.getElementById("next-btn");
const scrambleDiv = document.getElementById("scramble");
const cubeArraysDiv = document.getElementById("cube-arrays");

function displayCube(cube) {
    cubeArraysDiv.innerHTML = '';

    for (const face in cube) {
        const faceDiv = document.createElement('div');
        faceDiv.className = `face face-${face}`;

        //const title = document.createElement('strong');
        //title.textContent = face + ':';
        //faceDiv.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'face-grid';

        cube[face].forEach(row => {
            row.forEach(cell => {
                const span = document.createElement('span');
                span.className = `cube-${cell}`;
                grid.appendChild(span);
            });
        });

        faceDiv.appendChild(grid);
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
    else if (cubeSelect.value === "4x4"){
        const scramble = generate4x4();
        scrambleDiv.textContent = scramble.join(' ');
        cubeArraysDiv.innerHTML = '';
    }
    else if (cubeSelect.value === "5x5"){
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

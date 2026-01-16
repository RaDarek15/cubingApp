function createSolvedCube() {
    return {
        U: [['w','w','w'],['w','w','w'],['w','w','w']],
        D: [['y','y','y'],['y','y','y'],['y','y','y']],
        F: [['g','g','g'],['g','g','g'],['g','g','g']],
        B: [['b','b','b'],['b','b','b'],['b','b','b']],
        L: [['o','o','o'],['o','o','o'],['o','o','o']],
        R: [['r','r','r'],['r','r','r'],['r','r','r']]
    };
}
function getRow(face, r) {
    return [...face[r]];
}

function setRow(face, r, vals) {
    face[r] = [...vals];
}

function getCol(face, c) {
    return [face[0][c], face[1][c], face[2][c]];
}

function setCol(face, c, vals) {
    for (let i = 0; i < 3; i++) face[i][c] = vals[i];
}

function rev(a) {
    return [...a].reverse();
}

function generate3x3() {
    const faces = ["U","D","L","R","F","B"];
    const modifiers = ["", "'", "2"];
    const axisByFace = { U:"UD", D:"UD", L:"LR", R:"LR", F:"FB", B:"FB" };
    const scramble = [];
    let prevFace = "";
    let prevAxis = "";
    let axisBeforePrev = "";

    while(scramble.length < 25){
        const face = faces[Math.floor(Math.random()*faces.length)];
        const modifier = modifiers[Math.floor(Math.random()*modifiers.length)];
        const axis = axisByFace[face];
        if(face === prevFace) continue;
        if(axis === prevAxis && axis === axisBeforePrev) continue;

        scramble.push(face + modifier);
        axisBeforePrev = prevAxis;
        prevAxis = axis;
        prevFace = face;
    }
    return scramble;
}

function rotateFaceClockwise(face) {
    const n = 3;
    const res = Array.from({ length: n }, () => Array(n));
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            res[c][n - 1 - r] = face[r][c];
        }
    }
    return res;
}


function applyMove(cube, move) {
    const face = move[0];
    const modifier = move.slice(1);
    let turns = 1;
    if(modifier === "'") turns = 3;
    if(modifier === "2") turns = 2;
    for(let i=0;i<turns;i++){
        applyClockwiseFaceTurn(cube, face);
    }
}

function applyClockwiseFaceTurn(cube, face) {
    let t;

    if (face === "U") {
        cube.U = rotateFaceClockwise(cube.U);
        t = getRow(cube.F, 0);
        setRow(cube.F, 0, getRow(cube.R, 0));
        setRow(cube.R, 0, getRow(cube.B, 0));
        setRow(cube.B, 0, getRow(cube.L, 0));
        setRow(cube.L, 0, t);
    }

    if (face === "D") {
        cube.D = rotateFaceClockwise(cube.D);
        t = getRow(cube.F, 2);
        setRow(cube.F, 2, getRow(cube.L, 2));
        setRow(cube.L, 2, getRow(cube.B, 2));
        setRow(cube.B, 2, getRow(cube.R, 2));
        setRow(cube.R, 2, t);
    }

    if (face === "F") {
        cube.F = rotateFaceClockwise(cube.F);
        t = getRow(cube.U, 2);
        setRow(cube.U, 2, rev(getCol(cube.L, 2)));
        setCol(cube.L, 2, getRow(cube.D, 0));
        setRow(cube.D, 0, rev(getCol(cube.R, 0)));
        setCol(cube.R, 0, t);
    }

    if (face === "B") {
        cube.B = rotateFaceClockwise(cube.B);
        t = getRow(cube.U, 0);
        setRow(cube.U, 0, getCol(cube.R, 2));
        setCol(cube.R, 2, rev(getRow(cube.D, 2)));
        setRow(cube.D, 2, getCol(cube.L, 0));
        setCol(cube.L, 0, rev(t));
    }

    if (face === "R") {
        cube.R = rotateFaceClockwise(cube.R);
        t = getCol(cube.U, 2);
        setCol(cube.U, 2, getCol(cube.F, 2));
        setCol(cube.F, 2, getCol(cube.D, 2));
        setCol(cube.D, 2, rev(getCol(cube.B, 0)));
        setCol(cube.B, 0, rev(t));
    }

    if (face === "L") {
        cube.L = rotateFaceClockwise(cube.L);
        t = getCol(cube.U, 0);
        setCol(cube.U, 0, rev(getCol(cube.B, 2)));
        setCol(cube.B, 2, rev(getCol(cube.D, 0)));
        setCol(cube.D, 0, getCol(cube.F, 0));
        setCol(cube.F, 0, t);
    }
}




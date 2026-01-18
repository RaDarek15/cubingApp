function generate3x3BLD() {
    const moves = ["U", "D", "L", "R", "F", "B"];
    const modifiers = ["", "'", "2"];
    const axisMap = { U: "UD", D: "UD", L: "LR", R: "LR", F: "FB", B: "FB" };
    const moves2 = ["Uw","Rw", "Fw"];

    const scramble = [];
    let lastMove = "";
    let lastAxis = "";
    let secondLastAxis = "";

    while (scramble.length < 25) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        const fullMove = move + modifier;
        const axis = axisMap[move];

        if (move === lastMove) continue;

        if (axis === lastAxis && axis === secondLastAxis) continue;

        scramble.push(fullMove);

        secondLastAxis = lastAxis;
        lastAxis = axis;
        lastMove = move;
    }
    for(let i=0;i<Math.floor(Math.random() * 2)+1;i++){
        const move = moves2[Math.floor(Math.random() * moves2.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        const fullMove = move + modifier;

        if (move === lastMove) continue;

        scramble.push(fullMove);

        lastMove = move;
    }

    return scramble;
}

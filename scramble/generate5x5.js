function generate5x5() {
    const moves = ["U", "D", "L", "R", "F", "B"];
    const modifiers = ["", "'", "2","w","w2","w'"];
    const axisMap = { U: "UD", D: "UD", L: "LR", R: "LR", F: "FB", B: "FB" };

    let zakresRuchowy = Math.floor((Math.random() * 100) + 60);

    const scramble = [];
    let lastMove = "";
    let lastAxis = "";
    let secondLastAxis = "";

    while (scramble.length < zakresRuchowy) {
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

    return scramble;
}

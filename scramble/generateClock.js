function generateClock() {
    const sequence = ["UR", "DR", "DL", "UL", "U", "R", "D", "L", "ALL", "y2", "U", "R", "D", "L", "ALL"];
    const modifiers = ["+", "-"];
    const scramble = [];

    for(let i = 0;i<15;i++){
        if(i!=9){
            const move = Math.floor(Math.random() * 7)
            if(move == 0 || move == 6){
                const fullMove = sequence[i] + move + modifiers[0];
            }
            else{
                const fullMove = sequence[i] + move + modifiers[Math.floor(Math.random() * 2)];
            }
            scramble.push(fullMove);
        }
        else{
            const fullMove = sequence[i];
            scramble.push(fullMove);
        }
    }


    return scramble;
}
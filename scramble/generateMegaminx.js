function generateMegaminx() {
    const moves = ["R++","R--","D++","D--","U","U'"];
    const scramble = [];
    for(let i = 0; i<7;i++){
        for(let j = 0; j<11;j++){

            if(j==10){
                const move = moves[Math.floor(Math.random() * 7)+ 6];
                scramble.push(move);
            }
            else if(j%2==0){
                const move = moves[Math.floor(Math.random())];
                scramble.push(move);
            }
            else{
                const move = moves[Math.floor(Math.random() * 3)+ 2];
                scramble.push(move);
            }
        }
    }
    


    return scramble;
}
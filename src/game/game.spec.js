import {play, getResult} from "./game";

describe("Game logic", ()=>{
    it("returns 'Player' if the plyer move is 'Scissors' and the computer move is 'Paper'", ()=>{
        const result = getResult("Scissors", "Paper" );

        expect(result).toBe("Player");
    })


    it("returns 'Computer' if the computer move is 'Scissors' and the player move is 'Paper'", ()=>{
        const result = getResult("Paper","Scissors" );

        expect(result).toBe("Computer");
    })

    it("returns 'Draw' if the computer move is 'Scissors' and the player move is 'Scissors'", ()=>{
        const result = getResult("Scissors","Scissors" );

        expect(result).toBe("Draw");
    })
});

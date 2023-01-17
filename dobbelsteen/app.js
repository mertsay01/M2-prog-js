class App{
    
    runApplication(){
        let stat1 = this.rollstat();
        console.log(stat1)
    }
    
    rollstat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let array = [d1, d2, d3];
        array.sort();
        let som = array[1] + array[2] + array[3];
        return som;
    }

    rollDice() {
        let dice = Math.floor(Math.random() * 6 + 1);
        return dice;
    }
}

let app = new App();
app.runApplication();
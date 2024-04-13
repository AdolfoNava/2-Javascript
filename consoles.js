class GameConsole {
    constructor(name, company, year, hasOnline, playersAvailable = 4) {
        this.name = name;
        this.company = company;
        this.year = year;
        this.playersAvailable = playersAvailable
        this.hasOnline = hasOnline;
    }
}
let consoles = []

gameConsole1 = new GameConsole("PS4",'Sony', 2013,true);
gameConsole2 = new GameConsole("Nintendo Gamecube",'Nintendo', 2001,true);
consoles.push(gameConsole1);
consoles.push(gameConsole2);

//console.log(consoles);





function getLongesRepeating(s) {
    let longest = '';
    let current = '';
    
    for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = current.indexOf(char);
    if (index === -1) {
    current += char;
    if (current.length > longest.length) {
    longest = current;
    }
    } else {
    current = current.slice(index + 1) + char;
    }
    }
    
    return longest;
    }
    console.log(getLongesRepeating(`qwertyiuopasdfghjklzxcvbm`));
    console.log(getLongesRepeating(`qwertyasdfasdfasdfasdfiulzxcvbm`));
function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
function mod(n, m) {
    return ((n % m) + m) % m;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        Object.create(reel), Object.create(reel),Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        const cols = [];
        const previousReel = Object.create(reel);
        const nextReel = Object.create(reel);
        for (let i = 0; i < this.reels.length; i++) {
            cols[i] = [];
            previousReel.position = mod(this.reels[i].position -1, reel.symbols.length);
            nextReel.position = mod(this.reels[i].position +1, reel.symbols.length);
            cols[i].push(previousReel.display());
            cols[i].push(this.reels[i].display());
            cols[i].push(nextReel.display());
        }
        for (let i = 0; i < cols.length; i++) {
            console.log(`${cols[0][i]} | ${cols[1][i]} | ${cols[2][i]}`);
        }
        console.log("\n");
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
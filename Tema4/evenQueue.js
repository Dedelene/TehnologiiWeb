class Queue {
    #value;

    constructor(start){
        this.#value = start;
    }
    next(){
        const value = this.#value;
        this.#value += 2;
        return value;
    }
}

const queue = new Queue(0);

for(let i = 0; i < 10; i++){
    console.log(`queue[${i}] = ${queue.next()}`);
}
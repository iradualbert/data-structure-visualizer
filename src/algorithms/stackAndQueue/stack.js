class Stack{
    constructor(){
        this.storage = {};
        this.count = 0;
    };

    push(value){
        this.storage[this.count] = value;
        this.count ++;
    };

    pop(){
        if(this.count === 0){
            return undefined
        };
        this.count --;
        const removed = this.storage[this.count];
        delete  this.storage[this.count];
        return removed
    };

    peek(){
        return this.storage[this.count]
    };
    size(){
        return this.count;
    };
    isEmpty(){
        return this.count === 0;
    };
    clear(){
        this.storage = {};
        this.count = 0
    }

};

const word = "racecar";
const stack = new Stack();
for(let char of word){
    stack.push(char)
}
console.log(stack)
console.log(stack.pop())
console.log(stack)
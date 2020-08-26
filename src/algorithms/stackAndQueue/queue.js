class Queue {
    constructor(){
        this.storage = {};
        this.head  = 0;
        this.tail = 0;
    }

    // append
    enqueue(value){
        this.storage[ this.tail ] = value;
        this.tail ++;
    }

    // remove the first element
    dequeue(){
        const element = this.storage[this.head];
        if(!element){
            return 
        }
        delete this.storage[this.head];
        this.head ++;
        return element
    }
    // front element
    front(){
        return this.storage[this.head]
    }
    // is empty
    isEmpty(){
        return this.head === this.tail
    }

    // clear
    clear(){
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

}

const queue = new Queue()
queue.enqueue('student')
queue.enqueue('money')
console.log(queue)
queue.dequeue()
queue.dequeue()
console.log(queue)
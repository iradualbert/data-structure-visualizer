const hash = (key, size) => {
    let hashedKey = 0;
    for (let i=0; i <key.length; i++){
        hashedKey = key.charCode(i);
    }
    return hashedKey % size
}
class HashTable{
    constructor(){
        this.size = 20;
        this.buckets = new Array(this.size);
        for(let i =0; i <this.size; i++){
            this.buckets[i] = new Map();
        }
    };

    insert(key, value){
        let idx = hash(key,  this.size);
        this.buckets[idx].set(key, value);
    };

    remove(key){
        let idx = hash(key, this.size);
        let element = this.buckets[idx].get(key);
        this.buckets[idx].delete(key);
        return element
    };

    search(key){
        let idx = hash(key, this.size);
        return this.buckets[idx].get(key)
    };
}


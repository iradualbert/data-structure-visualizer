class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    };

    updateIndex(){
        let current = this.head;
        let index = 0
        while (current) {
            current.index = index;
            current = current.next
            index ++;
        }
    }
    // show data
    getData() {
        const elem = []
        var current = this.head
        while (current) {
            elem.push(current.data)
            current = current.next
        }
        return elem
    }

    // append 
    append(newNode) {
        // const newNode = new Node(data)
        if (this.head) {

            var current = this.head
            while (current.next) {
                current = current.next
                
            }
            current.next = newNode;
            
        }
        else {
            this.head = newNode
        };
        this.size ++;
        this.updateIndex()

    };
    // insert at index
    insertAt(newNode, index){
        if(index > 0 && index > this.size) {
            return 
        }
        if(index === 0) {
            this.head = newNode
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        while(count < index){
            previous = current;
            count ++;
            current = current.next;
        };
        newNode.next = current;
        previous.next = newNode;
    }
    // get by index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current){
            if (count === index) {
                console.log(current)
                return current
            }
            count ++;
            current = current.next;
        };
        return null
    };

    // remove at index 
    removeAt(index){
        let removed = null
        if(index > 0 && index > this.size){
            return null
        }
        else if(index === 0){
            const deleted = this.head
            this.head = deleted.next;
            removed = deleted;
        }
        else{
            let current = this.head;
            let previous;
            let count = 0;
            while (current.next) {
                previous = current
                count++;
                current = current.next;
                if (count === index) {
                    break
                };
            };
            previous.next = current.next;
            this.size--;
            removed = current
        };
        this.updateIndex();
        return removed
    };

    // clear
    clear(){
        this.head = null;
        this.size = 0
    }

    // reverse
    // reverse() {
    //     // const reversed = new LinkedList()
    //     var last = null
    //     var current = this.head
    //     while (current) {
    //         last = current
    //         current = current.next
    //     }
    //     this.head = null
    //     while (last) {
    //         this.append(last.data)
    //         last = last.prev
    //     }


    // };

};

export default LinkedList;
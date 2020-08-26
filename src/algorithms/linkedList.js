function Node (data, next=null) {
    this.data = data;
    this.next = next
}

class LinkedList {
    constructor(head=null){
        this.head = head;
        this.size = 0;
    };
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
    append(data) {
        const newNode = new Node(data)
        if (this.head) {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
            newNode.prev = current
        }
        else {
            this.head = newNode
        };
        this.size ++;

    };
    // insert at index
    insertAt(data, index){
        if(index > 0 && index > this.size) {
            return 
        }
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const newNode = new Node(data);
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
        if(index > 0 && index > this.size){
            return 
        }
        if(index === 0){
            this.head = this.head.next;
            return
        }
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index) {
            previous = current
            count ++;
            current = current.next;
        };
        previous.next = current.next;
        this.size --;
    };

    // clear
    clear(){
        this.head = null;
        this.size = 0
    }

    // reverse
    reverse() {
        // const reversed = new LinkedList()
        var last = null
        var current = this.head
        while (current) {
            last = current
            current = current.next
        }
        this.head = null
        while (last) {
            this.append(last.data)
            last = last.prev
        }


    };

};

const ll = new LinkedList();

ll.append(1)
ll.append(2)
ll.append(3)
ll.insertAt(10, 2)
ll.getData()
ll.removeAt(2)
ll.show()
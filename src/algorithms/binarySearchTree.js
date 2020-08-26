function Node(value) {
    this.value = value;
    this.visited = false;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function (newNode) {
    if(newNode.value > this.value){
        if(this.right === null){
            this.right = newNode;
        } else {
            this.right.addNode(newNode)
        }
        
    }
    else if ( newNode.value < this.value){
        if (this.left === null) {
            this.left = newNode
        } else {
            this.left.addNode(newNode)
        }
    }
};

Node.prototype.visit = function () {
    if(this.left !== null){
        this.left.visit()
    }
    console.log(this.value)
    if(this.right !== null){
        this.right.visit()
    }
    
};
Node.prototype.search = function (value) {
    if(this.value === value ){
        return this
    } 
    else if(value < this.value && this.left !== null ) {
        return this.left.search(value)
    }
    else if(value > this.value && this.right !== null ){
        return this.right.search(value)
    }
    return null
};

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function (value) {
    const newNode = new Node(value);
    if(this.root === null){
        this.root = newNode
    } else {
        this.root.addNode(newNode)
    }  

};
Tree.prototype.traverse = function(){
    if(this.root !== null){
        this.root.visit()
    } 
    
};

Tree.prototype.search = function (value) {
    return this.root.search(value)
}

Tree.prototype.deleteValue = function (value) {
    let found = this.search(value)
    if(found !== null){

    }
};
tree = new Tree()

for(var i=0; i < 30; i++){
    tree.addValue(Math.floor(Math.random() * 30))
}
tree.traverse()
let found = tree.search(5)
console.log(found)
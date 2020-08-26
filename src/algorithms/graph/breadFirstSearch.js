const { default: Node } = require("./node");


class Graph{
    constructor(){
        this.nodes = [];
        this.graph = {};
    };

    addNode(value){
        const newNode = new Node(value);
        this.nodes.push(newNode);
        this.graph[value] = newNode;
    };

    getNode(value){
        return this.graph[value]
    }
}
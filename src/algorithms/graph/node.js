class Node{
    constructor(value=null){
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parentNode = null;
    };

    addEdge(neighbor){
        this.edges.push(neighbor);
        neighbor.edges.push(this);
    }
}

export default Node;
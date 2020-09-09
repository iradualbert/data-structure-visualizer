function Node(value, next = null) {
    this.value = value;
    this.next = next;
    this.htmlId = null;
    this.htmlRow = null;
    this.htmlCol = null;
    this.index = null
}
export default Node;
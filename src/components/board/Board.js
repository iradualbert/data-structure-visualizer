import Node from "../../algorithms/linkedList/node";
import LinkedList from "../../algorithms/linkedList/linkedList";
import React, { Component } from "react";
import Box from "./Box";
import './Board.css';

let COL = 0
let ROW = 2
let animations = []
let speed = 100;


class Board extends Component {
    constructor(props){
        super(props);
        const grid = this.getInitialArrays()
        this.state = {
            grid: grid,
            ll: new LinkedList(),
            value: ""
        }
    }
    componentDidMount(){
        for(let k=0; k < 3; k++){
            const value =  Math.floor((Math.random() * 100) + 1);
            setTimeout(() => {
                this.addNode(value, k)
            }, k*speed);
        
        };                
    }
    
    addNode = (value) => {
        const {grid, ll} = this.state;
        const [row, col] = [getRandomFromRange(3), COL];
        const newNode = new Node(value);
        newNode.htmlRow = row;
        newNode.htmlCol = col;
        
        COL +=2;
        if(ROW===1){
            ROW = 2
        } else if(ROW === 2){
            ROW = 3
        } else {
            ROW = 1
        }
        const gridCopy = cloneArray(grid);
        gridCopy[row][col] = newNode;
        ll.append(newNode);
        animations.push([row, col])
        this.setState({grid: gridCopy})
        
    };

    deleteNode = (index) => {
            const newGrid = [...this.state.grid];
            const deleted = this.state.ll.removeAt(index);
            for(let i=0; i <= index; i++){
                const [r, c] = animations[i];
                const div = document.getElementById(`${r}-${c}`)
                setTimeout(() => {
                    div.style.backgroundColor = "red"
                }, i * speed);
                setTimeout(() => {
                    div.style.backgroundColor = "white"
                }, (i * speed)+100);
            }
            animations.splice(index, 1)
            setTimeout(() => {
                
                setTimeout(() => {
                    newGrid[deleted.htmlRow][deleted.htmlCol].next = null
                    newGrid[deleted.htmlRow][deleted.htmlCol] = null
                    newGrid[this.props.rows - 1][deleted.htmlCol] = null
                    this.setState({grid: newGrid})
                }, 1500);
                this.setState({grid: newGrid})
            }, 1000);
            
    };
    getInitialArrays = () =>{
        const { rows, cols } = this.props;
        const initialGrid = Array(rows).fill().map(() => Array(cols).fill(null))
        const emptyPositions = [...initialGrid]
        emptyPositions.pop()
        return initialGrid
    
    };
    
    renderGrid = () => {
        const {rows, cols} = this.props;
        const currentGrid = [];
        const grid = this.state.grid;
        for(let i=0; i < rows; i++){
            const currentRow = []
            for(let j=0; j < cols; j++){
                const key = `${i}-${j}`;
                if (rows - 1 !== i) {
                    const node = grid[i][j];
                    if(node && node.index !== null){
                        grid[rows-1][j] = node.index
                    }
                    currentRow.push(
                        <Box
                            id={key}
                            row={i}
                            col={j}
                            node={node}
                            deleteNode={this.deleteNode}
                            key={key}
                        >
                        </Box>
                    )
                } else {
                    currentRow.push(
                        <div key={key} className="index-box">
                            {grid[i][j]}
                        </div>
                    )
                };
             
            }
            currentGrid.push(currentRow)
        }
        return currentGrid
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.ll.size === 10 ) return 
        const value = this.state.value;
        if(value){
            this.addNode(value)
            this.setState({value: ""})
        }
    }

    render(){
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                  <input placeholder="Add Node Value" 
                     onChange={(event) =>  this.setState({value: event.target.value})} 
                     value={this.state.value}
                     />
                  <button type="submit">Add</button>
                </form>
                <div className="board">
                    {this.renderGrid()}
                </div>
               
            </div>
            
        )
    }
}
const cloneArray = (array) => {
    return [...array]
}
const getRandomFromRange = (length) => {
    const n = Math.floor(Math.random() * length);
    return n
}
export default Board;
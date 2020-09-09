import React from "react";
import './Header.css';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null,
            running: false,
            action: null
        }
    }


    render(){
        return (
            <div className="header">
                <div className="tab">
                    Array
               </div>
               <div className="tab">
                  Linked List
               </div>
                <div className="tab">
                    Binary Tree
               </div>
                <div className="tab">
                    Stack
               </div>
                <div className="tab">
                    Queue
               </div>
                <div className="tab">
                    Hash Tables
               </div>
                <div className="tab">
                    Graphs
               </div>
            </div>
        )
    }
}


export default Header;
import React from "react";
const Box = (props) => {
    const { id, node, deleteNode } = props;
    let angle = 100;
    let height = 100;
    if (node && node.next) {
        const y1 = node.htmlRow + 1;
        const x1 = node.htmlCol;
        const y2 = node.next.htmlRow;
        const x2 = node.next.htmlCol;
        let d = Math.sqrt(((y1 - y2) ** 2) + ((x1 - x2) ** 2))
        let a = x2 - x1
        let b = y2 - y1
        let tanAngle = b / a
        angle = Math.atan(tanAngle)
        height = 50 * d
    }
    return (
        <div className={node ? "box box-value" : "box"} id={id}
            onClick={() => node ? deleteNode(node.index) : null}
        >
            {node && node.value}
            {node && node.next ? (
            <React.Fragment>
                    <div className="pointer-square"
                        
                    >
                    </div>
                    <div className="pointer"
                        style={{ transform: `rotate(${angle}rad)`, width: `${height}px` }}
                    >
                    </div>
            </React.Fragment>
                
            ) : ""}
        </div>
    )
}
export default Box;
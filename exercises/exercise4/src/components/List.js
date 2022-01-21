import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <ul id="lis">
                {this.props.data}
            </ul>
        </div>
        )
    }
    
}
export default List;

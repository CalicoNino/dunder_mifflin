import React, { Component } from 'react';

class Item extends Component {
    render() { 
        const { onDeleteItem, onHandleItem } = this.props;
        return ( 
            <div className="input-group mb-3 w-75 p-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-info text-white">#{ this.props.id }</span>
                </div>
                <input type="text" id="title" value={this.props.title} onChange={e => onHandleItem(e, this.props.listId, this.props.id)} className="form-control" placeholder="Item Title"/>
                <div className="input-group-append">
                    <select value={this.props.priority} id="priority" onChange={e => onHandleItem(e, this.props.listId, this.props.id)} className={this.priorityColor()}>
                        <option value="0">Choose Priority...</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </div>
                <input type="text" value={this.props.deadline} id="deadline" onChange={e => onHandleItem(e, this.props.listId, this.props.id)} className="form-control" placeholder="Deadline [Optional]"/>
                <button onClick={() => onDeleteItem(this.props.listId, this.props.id)} className="btn btn-danger">Delete</button>
                <input type="text" value={this.props.text} id="text" onChange={e => onHandleItem(e, this.props.listId, this.props.id)} className="w-100 form-control" placeholder="Additional Text/Description/Phone Number [Optional]"/>

            </div> 
        );
    }

    priorityColor() {
        switch (this.props.priority) {
            case '1': return "custom-select bg-success text-white";
            case '2': return "custom-select bg-warning text-white";
            case '3': return "custom-select bg-danger text-white";
            default: return "custom-select";
        }
    }
}
 
export default Item;
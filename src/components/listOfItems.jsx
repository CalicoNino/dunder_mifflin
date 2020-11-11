import React, { Component } from 'react';
import Item from './item'
import json2csv from 'csvjson-json2csv/json2csv'

class ListOfItems extends Component {
    render() { 
        const { onHandleList, onHandleItem, onDeleteList, onAddItem, onDeleteItem, items } = this.props;
        return ( 
            <div styles="" className="container border-dark border-superthick rounded m-2">
                <div className="input-group mb-3 p-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-white">List #{ this.props.id }</span>
                    </div>
                    <input type="text" id="title" value={this.props.title} onChange={e => onHandleList(e, this.props.id)} className="form-control" placeholder="List Title"/>
                    <div className="input-group-append">
                        <select defaultValue={this.props.priority} id="priority" onChange={e => onHandleList(e, this.props.id)} className={this.priorityColor()}>
                            <option value="0" disabled>Choose Priority...</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>  
                    <input type="text" id="deadline" value={this.props.deadline} onChange={e => onHandleList(e, this.props.id)} className="form-control" placeholder="Deadline [Optional]"/>

                    <div className="w-100">
                        <input type="text" id="text" value={this.props.text} onChange={e => onHandleList(e, this.props.id)} className="form-control" placeholder="Additional Text/Description [Optional]"/>
                    </div> 
                </div> 
                <div className="float-right" >
                    { items.map( item =>
                        <Item
                            listId={this.props.id}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            priority={item.priority}
                            deadline={item.deadline}
                            text={item.text}
                            onHandleItem={onHandleItem}
                            onDeleteItem={onDeleteItem}
                        />
                    )}
                </div>
                <button onClick={() => onAddItem(this.props.id)} className="btn btn-info m-2"> Add New Item </button>
                <button onClick={this.download} className="btn btn-secondary m-2"> Download List </button>
                <button onClick={() => onDeleteList(this.props.id)} className="btn btn-danger float-right m-2"> Delete List </button>          
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
    download = () => {
        const list = this.props.items;
        var csv = json2csv(list);
        console.log(csv)
    
        var downloadLink = document.createElement("a");
        var blob = new Blob(["\ufeff", csv]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "list"+ this.props.id +"_"+ this.props.title +".csv";
    
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
}
 
export default ListOfItems;
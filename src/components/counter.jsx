
import React, { Component } from 'react';
class Counter extends Component {

    render() { 

       console.log("props",this.props);
        return (
        <div>
            <span  className={this.getbgClasses()}>{this.formatCount()}</span>
            <button 
            onClick={ ()=> this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm">
            +</button>
            <button 
            onClick={ ()=> this.props.onDecrement(this.props.counter)} className = "btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disable' : ''}>
            -</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">X</button>
           
        </div>
        );
    }
    getbgClasses(){
        let classes = "bg m-2 bg-";
        classes+= this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ?  "Zero" : value;
    }
  
}

 
export default Counter ;

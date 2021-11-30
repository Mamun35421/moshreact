
import React, { Component } from 'react';
class Counter extends Component {

    state = {
        count: this.props.value
    };

    
    handleIcrement = product =>{
        console.log(product);
        this.setState({count: this.state.count +1});
       
        
    }

  
    
    render() { 

       console.log("props",this.props);
        return (
        <div>
            <span  className={this.getbgClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIcrement()} className = "btn btn-secondary btn-sm">
                Increment</button>

                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
           
        </div>
        );
    }
    getbgClasses(){
        let classes = "bg m-2 bg-";
        classes+= this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ?  "Zero" : count;
    }
  
}

 
export default Counter ;

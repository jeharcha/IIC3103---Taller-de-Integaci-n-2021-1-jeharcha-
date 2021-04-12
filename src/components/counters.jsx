import React, { Component } from 'react';
import Counter from "./counter.jsx"

class Counters extends Component {
    state = { 
        products: [
            {id: 1, value: 0},
            {id: 2, value: 4},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }

    deleteHandler =(counter_id)=>{
        console.log("Counter deleted", counter_id);
        const products = this.state.products.filter(c => c.id !== counter_id);
        this.setState({products: products});
    }

    incrementHandler = (a_counter) => {
        let copia = [];
        let i = 0;
        for(let iter of this.state.products){
            copia[i] = iter;
            if (iter["id"] === a_counter.id){
                copia[i].value = iter["value"] + 1
            }
            i++;
        }            
        this.setState({products: copia});
    }
        

    handleReset =()=>{
        const products = this.state.products.map(c => {c.value = 0; return c});
        this.setState({products});
    }

    
    render() { 
        return (  
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn.btn-primary.btn-sm.m-2">Global Reset</button>
                {this.state.products.map(counter => 
                <Counter 
                    key={counter.id} 
                    onDelete={this.deleteHandler}
                    onIncrement={this.incrementHandler}
                    counter={counter}>
                    <h3>Counter N° {counter.id}</h3>
                </Counter>)}
            </div>
        );
    }
}
 
export default Counters;



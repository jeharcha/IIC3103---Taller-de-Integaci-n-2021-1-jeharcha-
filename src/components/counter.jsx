import React, { Component } from 'react';
import styled from "styled-components";
import "../styles/a_button.css";
import heading from "../styles/heading.css";


class Counter extends Component {
    state = {
        title_: "Tarea 1",
        author: "Jorge Harcha",
        value_deprecated: this.props.counter.value,
        tags : ["tag1", "tag2", "tag3"],
        flag: true,
        other_list: ["Jorge", "Mila", "Maca", "Jaime", "Ana Victoria"],
        invitados: []
    }


    render() { 
        //console.log("props: ", this.props);

        return (
            <React.Fragment>
                <h1 className = "h1">{this.state.title_}</h1>
                <p> Developed by {this.state.author}</p>
                {this.props.children}
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick = {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">increment</button>
                <button onClick = {() => this.resetHandler(this.state.author, this.props.counter.value)} > Reset</button>
                <a_button 
                    className = "reset"
                    //className="btn.btn-danger.btn-sm.m2" 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    >
                        Delete
                        </a_button>
                {this.renderTags()}
                {this.renderFamMemebers()}
            </React.Fragment>
            );
    }

    incrementHandler_deprecated = () =>{
        console.log("A button to Increment was Clicked", this.props.counter.value);
        this.setState({value: this.props.counter.value + 1});
    }

    resetHandler = (name, cuenta) => {
        this.setState({value: 0});
        let alert_text = name + ", you've reset the count for good.\n There were " + cuenta + " on your bag.";
        alert(alert_text);
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are nos elements to render</p>;
        return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
    }

    renderFamMemebers(){
        let aux_list = [];
        if (this.state.flag) {
            for (let i=0; i<3; i++){
                this.state.invitados[i] = this.state.other_list[i];
            }
            aux_list = this.state.invitados;
        }
        //When flag es False
        else {aux_list = this.state.other_list};
        return <ul>{aux_list.map(person => <li key={person}>{person}</li>)}</ul> 
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;
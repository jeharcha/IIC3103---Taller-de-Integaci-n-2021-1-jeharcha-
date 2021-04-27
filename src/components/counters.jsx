import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
  state = {
    products: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  deleteHandler = (counter_id) => {
    console.log('Counter deleted', counter_id);
    const products = this.state.products.filter(
      (c) => c.id !== counter_id
    );
    this.setState({ products: products });
  };

  resetHandler = (a_counter_objetc, name) => {
    console.log(
      'You have deleted this counter: ',
      a_counter_objetc
    );
    let alert_text =
      'Dear ' +
      name +
      ", you've reseted the" +
      a_counter_objetc.id +
      'counter.';
    alert(alert_text);
    console.log(a_counter_objetc.products);
    this.setState({
      products: this.state.products.map((iter_counter) => {
        if (a_counter_objetc.id === iter_counter.id) {
          iter_counter.value = 0;
        }
        return iter_counter;
      })
    });
  };

  incrementHandler = (a_counter) => {
    // a_counter es un parámetro de esta arrow function
    let copia = [];
    let i = 0;
    for (let iter of this.state.products) {
      copia[i] = iter;
      if (iter['id'] === a_counter.id) {
        copia[i].value = iter['value'] + 1;
      }
      i++;
      console.log(i);
    }
    this.setState({ products: copia });
  };

  handleGReset = () => {
    const products = this.state.products.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleGReset}
          className="btn.btn-primary.btn-sm.m-2"
        >
          {' '}
          Global Reset
        </button>

        {/* A continuación hacemos en rendering de las cosas repetidas */}
        {this.state.products.map((a_counter) => (
          <Counter
            // A cada hijo le asigno un identificador -key-,
            // así como tambien a cada instancia, le paso los métodos
            // para manejar el incremento
            key={a_counter.id}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
            onReset={this.resetHandler}
            counter={a_counter}
          >
            <h3>Counter N° {a_counter.id}</h3>
            <h4>
              {' '}
              La cuenta de Counters para este contador es de{' '}
              {a_counter.id}.{' '}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from 'react';
import Counter from './counter';

// i'm not exporting this?? i should export this
class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement} = this.props;
        console.log(this.props);
        // render props children in counter.jsx
        return (
        <div>
            <button 
                className="btn btn-primary btn-sm m-2"
                onClick={ onReset }
            > 
            Reset
            </button>
            { // events are raised here
            counters.map(counter => 
                <Counter 
                    key={ counter.id } 
                    onDelete={ onDelete }
                    counter={ counter }
                    onIncrement={ onIncrement }
                >
                    <h4>Counter #{ counter.id }</h4>
                </Counter>
            )
            }
        </div>
        );
    }
}

export default Counters;
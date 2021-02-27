import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log("Previous Props: " + prevProps);
        console.log("Previous State: " + prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            // Get new data from server
        }
    }

    componentWillUnmount(){
        console.log("Counter - Unmount");
    }

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    constructor(){
        super();
        console.log("Constructor", this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    // remove local state for counter component and rely on single source of truth
    render() { 
        // id does not work(??)
        return (
        <div>

            { this.state.tags.length === 0 && "Please create a new tag!" }

            <span style={ this.styles } className={ this.getBadgeClasses() }>{ this.formatCount() }</span>

            <button 
                className="btn btn-danger btn-sm m-2" 
                onClick={ () => this.props.onDelete(this.props.counter.id) }
            >
            Delete
            </button>

            <button 
                onClick={ () => this.props.onIncrement(this.props.counter) } 
                className="btn btn-secondary btn-sm"
            >
            Increment
            </button>
            <ul>
                { this.renderTags() }
            </ul>
        </div>
        );
    } 
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.count === 0) ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // const { count: count } = this.state;
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>
    }

    // updates counter value locally
    // it is not being used
    handleIncrement = (product) =>{
        console.log("Increment Clicked", this);
        console.log(product);
        this.setState({ count: this.state.count + 1});
    }

}
 
export default Counter;